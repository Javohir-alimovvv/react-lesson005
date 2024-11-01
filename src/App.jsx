import './App.css'
import About from './components/about/About'
import Featur from './components/featur/Featur'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/prodacts/Products'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Featur/>
      <About/>
      <Products/>
    </>
  )
}

export default App
