import '../styles/components/about/About.css'
import Aboutus1 from '../assets/photos/aboutus1.svg'
import Aboutus2 from '../assets/photos/aboutus2.svg'
import Testimonial1 from '../assets/photos/testimonial1.svg'
import Testimonial2 from '../assets/photos/testimonial2.svg'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {
  return (
    <>
      <section className="aboutus">
        <section className="aboutus-top">
          <div className="left">
            <h1 className="title">Navigate your career challenges with personalized 1:1 coaching from vetted coaches
            </h1>
          </div>
          <div className="right">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Figure out what you want to do next</Accordion.Header>
                <Accordion.Body>
                  If you have achieved your previous career goals and are now seeking your next challenge, coaching can help you confidently identify your next step and create a plan to reach it. We will guide you from feeling stuck to thriving.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Switch jobs or careers successfully</Accordion.Header>
                <Accordion.Body>
                  On average, our clients change jobs every 2-3 years. A career coach can assist you in determining the next step that truly aligns with your aspirations, and support you in reaching that goal through accountability, networking, CV and portfolio design.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Grow into a new role with confidence</Accordion.Header>
                <Accordion.Body>
                  New big challenges are what make us tick. Our coaches can help you build on an inner sense of confidence in your new role, exceed expectations and make lasting impact.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Build and grow your own business</Accordion.Header>
                <Accordion.Body>
                  We are a start up, we love start ups, we are passionate about start ups! Most of our clients transition from corporate careers into building their own businesses. We connect them with coaches and mentors with proven track record in entrepreneurship to guide them into their most exciting career journey to date.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
        <section className="aboutus-middle">
          <div className="middletop">
            <h1 className="title">Our special sauce</h1>
            <div className="content">

              <div className="middleftimg">
                <img src={Aboutus1} alt="about-us-1" />
              </div>
              <div className="special-sauce">
                <h2 className="special-sauce-title">1) We recruit stellar coaches</h2>
                <p className="special-sauce-text">
                  Our coaches are certified from the leading coaching associations and have extensive experience working in creative fields or building their own companies. We work with exited entrepreneurs, previous product / marketing leaders and boundary pushing creatives to make sure you find the fit that <strong>feels right.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="middlebottom">
            <div className="left">
              <div className="special-sauce">
                <h2 className="special-sauce-title">2) We hand pick matches
                </h2>
                <p className="special-sauce-text">
                  Finding the perfect match is an art and a science, so we don’t leave it to technology yet. Our <strong>career consultants</strong> work with you to find you the best coach for your goals and background. We are here to answer any questions and assist in your career transition.
                </p>
              </div>
              <div className="special-sauce">
                <h2 className="special-sauce-title">3) You don’t pay unless you’re 100% certain
                </h2>
                <p className="special-sauce-text">
                  First step after you get a match (woo, exciting!) is to have a <strong>free discovery session</strong> with your coach. You only commit and pay if you want to continue working with your coach.
                </p>
              </div>
            </div>
            <div className="right">
              <img src={Aboutus2} alt="about-us-img" />
            </div>
          </div>
        </section>
        <section className="aboutus-testimonials">
          <h1>Previously on PathX</h1>
          <div className="testimonials">
            <div className="single-testimonial">
              <div className="top">
                <h2>“Coaching completely transformed how I thought about myself and my career.“</h2>
              </div>
              <div className="bottom">
                <img src={Testimonial1} alt="testimonial-img" />
                <div className="text">
                  <p className="person-name">Jumoke Fernandez, Sr Creative</p>
                  <p className="coach-name">Coached by <strong>Tom</strong></p>
                </div>
              </div>
            </div>
            <div className="single-testimonial">
              <div className="top">
                <h2>“I understood where I want to be in 10 years and built a roadmap to get there.”</h2>
              </div>
              <div className="bottom">
                <img src={Testimonial2} alt="testimonial-img" />
                <div className="text">
                  <p className="person-name">Sasha Green, Campaign Manager</p>
                  <p className="coach-name">Coached by <strong>Adele</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}