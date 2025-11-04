import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Jobs from './pages/Jobs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  )
}

export default App
