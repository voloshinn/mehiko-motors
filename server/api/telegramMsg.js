module.exports.sendMsg = (req, res) => {
  const config = require("../config/config.json")

  let http = require('request')
  let reqBody = req.body

  let fields = [
    '<b>Имя</b>:', reqBody.name,
    '<b>Фамилия</b>:', reqBody.surname,
    '<b>Номер телефона</b>:', reqBody.phoneNumber,
    '<b>Авто для рассчёта</b>:', reqBody.auto,
  ]

  let msg =''

  fields.forEach((field) => {
    msg += field + '\n'
  })

  msg = encodeURI(msg)

  http.post(
    `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`,
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if (response.statusCode === 200) {
            res.status(200).json({
                status: 'ok',
                message: 'Заявка успешно отправлена! Ожидайте обратной связи.',
            });
        }
        if (response.statusCode !== 200) {
            res.status(400).json({
                status: 'error',
                message: 'Произошла ошибка!',
            });
        }
    }
);
}