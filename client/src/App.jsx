import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Teams from './pages/Teams'
import Venues from './pages/Venues'
import Bracket from './pages/Bracket'
import TeamDetails from './pages/TeamDetails'

function Layout() {
  return (
    <div className="bg-[#0a0c10] min-h-screen text-white pb-10">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:id" element={<TeamDetails />} />
          <Route path="venues" element={<Venues />} />
          <Route path="bracket" element={<Bracket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}