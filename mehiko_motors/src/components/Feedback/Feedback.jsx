import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './Feedback.css'
import { toast } from 'react-toastify';


export default function Feedback() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [auto, setAuto] = useState("")
  
  const [hasNameError, setHasNameError] = useState(false)
  const [hasSurnameError, setHasSurnameError] = useState(false)
  const [hasPhoneNumberError, setHasPhoneNumberError] = useState(false)
  const [hasAutoError, setHasAutoError] = useState(false)

  const [formValid, setFormValid] = useState(false)

  function handleChange(event) {
    console.log(event.target.value)
    if (event.target.id == "name") {
      setName(event.target.value)
      setHasNameError(event.target.value.trim().length === 0)
    } else if (event.target.id == "surname") {
      setSurname(event.target.value)
      setHasSurnameError(event.target.value.trim().length === 0)
    } else if (event.target.id == "phoneNumber") {
      setPhoneNumber(event.target.value)
      setHasPhoneNumberError(event.target.value.trim().length === 0)
    } else if (event.target.id == "auto") {
      setAuto(event.target.value)
      setHasAutoError(event.target.value.trim().length === 0)
    }
    
  }

  useEffect(() => {
    if (hasNameError || hasSurnameError || hasPhoneNumberError || hasAutoError) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [hasNameError, hasSurnameError, hasPhoneNumberError, hasAutoError])

  const submitData = (e) => {
    e.preventDefault();
    fetch(' http://localhost:3001/telegram', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, surname, phoneNumber, auto }),
  })
      .then((response) => response.json())
      .then((result) => toast.success(result.message));
  }

  return (
    <div className='feedback-wrapper'>
      <span id='feedback' className='title'>Хотите расчитать стоимость определённой машины?</span>
      <span className='subtitle'>Оставьте заявку, и мы обязательно поможем вам.</span>
      <div className='feedback-form'>
        <form action="">
          <input
          type="text"
          id='name'
          value={name}
          style={{
            border: hasNameError ? '1px solid red' : null,
          }}
          onChange={handleChange}
          placeholder='Имя'
          /> <br />

          <input
          type="text"
          id='surname'
          value={surname}
          style={{
            border: hasSurnameError ? '1px solid red' : null,
          }}
          onChange={handleChange}
          placeholder='Фамилия'
          /> <br />

          <input
          type="tel"
          id='phoneNumber'
          value={phoneNumber}
          style={{
            border: hasPhoneNumberError ? '1px solid red' : null,
          }}
          onChange={handleChange}
          placeholder='+7 (900) 000-00-00'
          /> <br />

          <input
          type="text"
          id='auto'
          value={auto}
          style={{
            border: hasAutoError ? '1px solid red' : null,
          }}
          onChange={handleChange}
          placeholder='BMW X6, 3 поколение'
          /> <br />
          
          <pre>
            name: {name}
            <br />
            surname: {surname}
            <br />
            phoneNumber: {phoneNumber}
            <br />
            auto: {auto}
          </pre>

          <Button disabled={formValid} onClick={submitData}>Отправить</Button>
        </form>
      </div>
    </div>
  )
}
