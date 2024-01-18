// Component imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'
import { useState } from 'react'


export default function App() {

  const [activeUser, setActiveUser] = useState(null)

  return (
    <>
      <Navbar activeUser={activeUser} setActiveUser={setActiveUser}/>
      <Outlet context={[activeUser, setActiveUser]}/>
      <Footer />
    </>
  )
}