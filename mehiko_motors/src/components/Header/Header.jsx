import './Header.css'
import Button from '../Button/Button'

export default function Header() {
  return (
    <header>
      <div className='header-wrapper'>
        <span className='logo'>MEHIKO MOTORS</span>
        <Button><a href="">Оставить заявку</a></Button>
        <span className='phone-number'>
          <p>+7 (909) 447-73-78 — Анастасия</p>
          <p>+7 (989) 123-10-29 — Михаил</p>
        </span>
      </div>
      <div className='presentation'></div>
    </header>
  )
}