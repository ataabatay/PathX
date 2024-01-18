// Component imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'


export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}