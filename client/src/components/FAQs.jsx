import Accordion from 'react-bootstrap/Accordion';
import FAQImage from '../assets/photos/faqs.svg';
import ArrowIcon from '../assets/icons/arrow.svg';
import '../styles/components/faqs/FAQS.css';

export default function FAQs() {
  return (
    <>
      <section className="faqs">
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="image">
          <img src={FAQImage} alt="faqs-image" />
        </div>
        <div className="questions-answers-accordion">
          <div className="arrow-icon">
            <img src={ArrowIcon} alt="" />
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What can I expect from my coach?</Accordion.Header>
              <Accordion.Body>
                Most of our clients come to us with concerns such as 'I’m not sure what my next steps are' or 'I’m not fulfilled in my career, what should I do?’ By working with you, your coach can help you gain clarity about your career goals, identify your strengths and create a roadmap for achieving those goals.  Instead of giving you direct instructions, your coach will ask you the right questions and guide you towards your own conclusions which will result in lasting transformation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I only speak about my career with my coach?</Accordion.Header>
              <Accordion.Body>
                As our careers don’t live in silos, we encourage discussing areas of your life such as relationships and health with your coach that might impact your career journey.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How does Pathio select its coaches?</Accordion.Header>
              <Accordion.Body>
                Our coaches hold accreditations from reputable coaching institutions such as ICF, EMCC, and AC, and/or have extensive experience working in creative industries / building their own businesses. We only work with coaches that have a deep passion in helping creative individuals find fulfillment and success.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How does Pathio match its coaches to clients?</Accordion.Header>
              <Accordion.Body>
                Upon signing up, we’ll match you with a coach who has a deep passion and proven track record in solving the problem you want to solve. We also look for a background and industry match whether that’s in technology, design, marketing or entrepreneurship.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How much does coaching on Pathio cost?</Accordion.Header>
              <Accordion.Body>
                A session with one of our coaches cost on average between £100 to £400 depending on their background and experience. We recommend having 6 to 12 sessions to see meaningful transformation. After you sign up, our career consultants will work with you to find the right coach for your budget. If the options are not affordable, you can always sign up for our pro-bono coaching scheme.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>What is pro-bono coaching?</Accordion.Header>
              <Accordion.Body>
                We work with training coaches who offer free coaching sessions prior to finishing their accreditation. We are always on the lookout of great future coaches and match them with our clients who can’t afford a full coaching plan right now. Pro bono coaching currently represents 10% of our matches.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>What’s the cadence I should see my coach for?</Accordion.Header>
              <Accordion.Body>
                On average, our clients meet their coach every two weeks for a period of 3-6 months. Once you are matched with a coach, you have the flexibility to determine the frequency of your sessions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>What is the first free session?</Accordion.Header>
              <Accordion.Body>
                Once you match with your coach you’ll be able to have a complimentary session to assess if you think you are a good fit for each other. You don’t need to invest anything until you want to commit to working with your coach.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>What's the difference between coaching and therapy?</Accordion.Header>
              <Accordion.Body>
                Coaching is future-focused and helps ambitious individuals identify and achieve their personal and professional goals. On the other hand, therapy primarily focuses on addressing mental health concerns and facilitating emotional healing. While coaching may also address topics such as mindset and emotions, its primary focus is not on mental health. If you're not sure if coaching is the right path for you, contact us for an introductory call and we'll be happy to help answer any further questions!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  )
}