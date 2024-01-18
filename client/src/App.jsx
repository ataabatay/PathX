// Component imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import { getActiveUser } from './utils/helpers/common.js'


export default function App() {

  const [activeUserId, setActiveUserId] = useState(getActiveUser())

  return (
    <>
      <Navbar activeUserId={activeUserId} setActiveUserId={setActiveUserId}/>
      <Outlet context={[activeUserId, setActiveUserId]}/>
      <Footer />
    </>
  )
}