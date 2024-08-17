import React from 'react'
import './Telegram.css'

export default function Telegram() {
  return (
    <div className='telegram-wrapper'>
      <span className='telegram-title'>Наше сообщество в Telegram:</span> <br />
      <img className='telegram-qr-code' src="../src/assets/qr-code.svg" alt="telegram qr-code" /> <br />
      <a href="https://t.me/mehiko_motors">https://t.me/mehiko_motors</a>
    </div>
  )
}
