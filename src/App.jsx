import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './pages/about/About'
import Home from './pages/home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App