import '../styles/components/navbar/Navbar.css'
import { Link } from "react-router-dom"
import { getToken, removeToken } from '../utils/helpers/common'
import { useEffect, useState } from 'react'

export default function Navbar() {

  const [activeUser, setActiveUser] = useState(null)

  useEffect(() => {
    const activeUserToken = getToken()
    setActiveUser(activeUserToken)
  }, [activeUser])

  const handleSignout = () => {
    removeToken()
    setActiveUser(null)
  }

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <Link to={'/'}><h1>PathX</h1></Link>
        </div>
        <div className="navbar-links">
          <ul>
            {activeUser ? (
              <>
                <Link to={'/mysessions'}>My Sessions</Link>
                <Link to={'/booking/datetime'}>Book</Link>
                <Link to={'/'} onClick={handleSignout}>Signout</Link>
              </>
            ) : (
              <>
                <Link to={'/about'}>About us</Link>
                <Link to={'/faqs'}>FAQ</Link>
                <Link to={'/contact'}>Contact us</Link>
                <Link to={'/login'}>Login</Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}