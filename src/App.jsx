import './App.css'
import { Footer } from './common/Footer/Footer';
import { Header } from './common/Header/Header'
import { Router } from './pages/Routes/Router';
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();

function App() {

  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App



