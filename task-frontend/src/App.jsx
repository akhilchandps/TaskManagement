
import './App.css'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Update from './Components/Update'
function App() {

  return (
    <>
        <Router>
      <Routes>
        {/*Home pages */}
        <Route path="/" element={<Home/>} />
      
        <Route path="/UpdateTask/:id" element={<Update />} />

      </Routes>
   </Router>
    </>
  )
}

export default App
