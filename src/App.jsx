import { react } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import { Team } from './pages/Team'
import { Demo } from './pages/Demo'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App


