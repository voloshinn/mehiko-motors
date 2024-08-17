import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Feedback from './components/Feedback/Feedback'
import Telegram from './components/Telegram/Telegram'

export default function App() {

  return (
    <div className='wrapper'>
      <Header />
      <Feedback />
      <Telegram />
      <Footer />
    </div>
  )
}