import '../styles/components/home/Home.css'
import ZoomCall from '../assets/photos/zoomcall.svg'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section className="home">

        <section className="home-left">
          <h1 className="hero-title">
            Take your next big career step with purpose
          </h1>
          <p className="hero-p">
            We help creative, ambitious individuals work with the <strong>right career coach</strong> at the right time.
          </p>
          <div className="buttons">
            <Link to={'/login'}>
              <button className="primary-button">
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="primary-button">
                Get started
              </button>
            </Link>
          </div>
        </section>

        <section className="home-right">
          <div className="hero-image">
            <img src={ZoomCall}></img>
          </div>
        </section>


      </section>
    </>
  )
}