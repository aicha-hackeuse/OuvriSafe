import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inscription" element={<SignupPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
