import React from 'react'
import HeartDiseaseForm from './components/HeartDiesesForm'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/predict" element={<HeartDiseaseForm/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
