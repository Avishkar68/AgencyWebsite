import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'


function App() {

  return (
    <div className="flex flex-col items-center justify-center">
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path="our-story" element={<HomePage />} />
          <Route path="features/expenses" element={<PricingPage />} />
        </Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App
