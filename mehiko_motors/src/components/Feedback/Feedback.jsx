import React from 'react'
import './Feedback.css'

export default function Feedback() {
  return (
    <div className='feedback-wrapper'>
      <span id='feedback' className='title'>Хотите расчитать стоимость определённой машины?</span>
      <span className='subtitle'>Оставьте заявку, и мы обязательно поможем вам.</span>
      <div className='feedback-form'>
        <form action="">
          <input id='name' type="text" placeholder='ФИО'/> <br />
          <input id='phoneNumber' type="tel" placeholder='+7 (900) 000-00-00'/> <br />
          <input id='carName' type="text" placeholder='BMW X6, 3 поколение'/>
          <br />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  )
}
