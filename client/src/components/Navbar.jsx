import '../styles/components/navbar/Navbar.css'

export default function Navbar() {

  return (
    <>
      <section className="navbar">
        <div className="navbar-logo">
          <h1>PathX</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>My Sessions</li>
            <li>Book</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Login</li>
          </ul>
        </div>
      </section>
    </>
  )
}