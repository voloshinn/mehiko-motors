import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Feedback from './components/Feedback/Feedback'
import Button from './components/Button/Button'

export default function App() {

  return (
    <div className='wrapper'>
      <Header></Header>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  )
}