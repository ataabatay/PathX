import { Link } from 'react-router-dom'
import '../styles/components/footer/Footer.scss'
import Instagram from '../assets/socials/instagram.svg'
import Facebook from '../assets/socials/facebook.svg'
import X from '../assets/socials/x.svg'
import Linkedin from '../assets/socials/linkedin.svg'
import GitHub from '../assets/socials/github.svg'

export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer-top">
          <div className="footer-logo">
            <h1 className='logo'>PathX</h1>
            <p className='text'>Pathio is a coaching platform with a mission to help creative ambitious leaders take their next big step through 1:1 personalised coaching.</p>
          </div>
          <div className="socials">
            <Link
              to='#'
              className='instagram'>
              <img src={Instagram} />
            </Link>
            <Link
              to='#'
              className='linkedin'>
              <img src={Linkedin} />
            </Link>
            <Link
              to='#'
              className='facebook'>
              <img src={Facebook} />
            </Link>
            <Link
              to='#'
              className='twitter'>
              <img src={X} />
            </Link>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="projectby">
            <Link to='https://github.com/ataabatay'>
              <img src={GitHub}></img><p>Ata Abatay</p>
            </Link>
          </div>
        </section>
      </footer >
    </>
  )
}