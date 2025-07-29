import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbarjsx from './components/Navbar'
import Hero from './components/Hero'
import CarSection from './components/CarSection'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Navbarjsx></Navbarjsx>
    <Hero></Hero>
    <CarSection></CarSection>
    <Footer></Footer>
    </>
  )
}

export default App
