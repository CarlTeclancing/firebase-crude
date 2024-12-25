import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Write from './components/Write';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/write" element={<Write />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
