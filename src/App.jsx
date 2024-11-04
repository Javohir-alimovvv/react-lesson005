import './App.css'
import About from './components/about/About'
import Featur from './components/featur/Featur'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/prodacts/Products'

import { ToastContainer, toast } from 'react-toastify';

// import 'aos/dist/aos.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Featur/>
      <About/>
      <Products/>

      <ToastContainer/>

    </>
  )
}

export default App
