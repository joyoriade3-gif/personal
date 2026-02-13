import React from 'react'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import OverSection from './component/OverSection'
import About from './component/About'
import Impact from './component/Impact'
import Involve from './component/Involve'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div  className="min-h-screen bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          }} >
          <NavBar/>  
          <HeroSection/>
        </div>
        <OverSection/>
        <About/>
      </div>
      <Impact/>
      <Involve/>
      <Footer/>
    </div>
  )
} 

export default App