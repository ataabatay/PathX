import { useEffect } from 'react'
import { Form, useActionData } from 'react-router-dom'
import '../styles/components/contact/Contact.css'

export default function Contact() {

  const requestObject = useActionData()

  useEffect(() => {
    console.log(requestObject)
  },[requestObject])

  return (
    <>
      <section className="contact">
        <h1>Contact us</h1>
        <Form className='contact-us' method='POST'>
          <div className="fullname">
            <div className="input-item">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstname" />
            </div>
            <div className="input-item">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastname" />
            </div>
          </div>
          <div className="input-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-item">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <input type="submit" id="submit-button" name="submit-button" value='Submit' />
        </Form>
      </section>
    </>
  )
}