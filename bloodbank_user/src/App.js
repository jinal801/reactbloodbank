import './App.css';
import Login from './components/Login'
import Read from './components/Read'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'


function App() {
  return (
    <Router>
        <div className='main'>
            <h2 className="main-header">Hello World</h2>
            <div>
                 <Routes>
                  <Route path="/signup" element={<Signup />}/>
                </Routes>
            </div>
            <div style={{ marginTop: 20 }}>
                <Routes>
                    <Route exact path='/read' element={<Read />} />
                </Routes>
            </div>
            <div style={{ marginTop: 20 }}>
                <Routes>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}
export default App;