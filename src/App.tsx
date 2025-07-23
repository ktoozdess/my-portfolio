import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
