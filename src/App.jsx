import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App