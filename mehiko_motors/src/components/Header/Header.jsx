import './Header.css'
import Button from '../Button/Button'

export default function Header() {
  return (
    <header>
      <div className='header-wrapper'>
        <span className='logo'>MEHIKO MOTORS</span>
        <Button><a href="#feedback">Оставить заявку</a></Button>
      </div>
      <div className='presentation'>
        <div className='title'>Покупка авто за рубежом. Доставляем авто из Китая, Кореи, США и ОАЭ.</div>
        <div className='subtitle'>Работаем по всей России. Полное сопровождение от заказа до получения ЭПТС и учёта.</div>
      </div>
    </header>
  )
}