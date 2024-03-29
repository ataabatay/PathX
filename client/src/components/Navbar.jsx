/* eslint-disable react/prop-types */
import '../styles/components/navbar/Navbar.css'
import { Link } from "react-router-dom"
import { removeToken } from '../utils/helpers/common'

export default function Navbar({activeUserId, setActiveUserId}) {

  const handleSignout = () => {
    removeToken()
    setActiveUserId(null)
  }

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <Link to={'/'}><h1>PathX</h1></Link>
        </div>
        <div className="navbar-links">
          <ul>
            {activeUserId ? (
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