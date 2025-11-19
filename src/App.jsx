import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import JVList from './pages/JointVenture/List'
import JVDetails from './pages/JointVenture/Details'
import JVForm from './pages/JointVenture/Form'
import COList from './pages/CompanyOwned/List'
import CODetails from './pages/CompanyOwned/Details'
import COForm from './pages/CompanyOwned/Form'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/joint-venture" element={<JVList />} />
      <Route path="/joint-venture/new" element={<JVForm />} />
      <Route path="/joint-venture/:id" element={<JVDetails />} />
      <Route path="/company-owned" element={<COList />} />
      <Route path="/company-owned/new" element={<COForm />} />
      <Route path="/company-owned/:id" element={<CODetails />} />
      <Route path="*" element={<Navigate to="/joint-venture" replace />} />
    </Routes>
  )
}

export default App
