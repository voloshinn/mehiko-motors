import './Feedback.css'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// const phoneRegex = /^\+7\d{10}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string()
    .required('Surname is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required'),
    // .matches(phoneRegex, 'Телефон должен быть в формате +79000000000'),
  auto: Yup.string()
    .required('Auto is required'),
});


export default function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const submitData = (data) => {
    fetch('https://mehiko-motors.duckdns.org/api/telegram', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => toast.success(result.message));
  }

  // const isFormValid = () => {
  //   return Object.keys(errors)?.length === 0;
  // }

  return (
    <div className='feedback-wrapper'>
      <span id='feedback' className='title'>Хотите расчитать стоимость определённой машины?</span>
      <span className='subtitle'>Оставьте заявку, и мы обязательно поможем вам.</span>
      <div className='feedback-form'>
        <form onSubmit={handleSubmit(submitData)} action="">
          <span>{errors.name?.message}</span>
          <input
          type="text"
          id='name'
          name='name'
          placeholder='Имя'
          {...register('name')}
          /> <br />

          <span>{errors.surname?.message}</span>
          <input
          type="text"
          id='surname'
          name='surname'
          {...register('surname')}
          placeholder='Фамилия'
          /> <br />

          <span>{errors.phoneNumber?.message}</span>
          <input
          type="tel"
          id='phoneNumber'
          name='phoneNumber'
          {...register('phoneNumber')}
          placeholder='+79000000000'
          /> <br />

          <span>{errors.auto?.message}</span>
          <input
          type="text"
          id='auto'
          name='auto'
          {...register('auto')}
          placeholder='BMW X6, 3 поколение'
          /> <br />

          <div className='btn-wrapper'>
            <button type="submit" id='submit'>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  )
}
