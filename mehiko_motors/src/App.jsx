import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Feedback from './components/Feedback/Feedback'
import Telegram from './components/Telegram/Telegram'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <div className='wrapper'>
      <Header />
      <Feedback />
      <Telegram />
      <Footer />
      <ToastContainer />
    </div>
  )
}