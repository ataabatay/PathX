import { useEffect, useState } from 'react'
import { Form, useActionData } from 'react-router-dom'
import '../styles/components/contact/Contact.css'
import Toast from '../components/Toast.jsx'

export default function Contact() {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const res = useActionData()

  useEffect(() => {
    console.log(res)
    if (res?.status == 201) {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
      })
      // create a toast saying message received
    }
  }, [res])

  return (
    <>
      <section className="contact">
        <h1>Contact us</h1>
        <Form className='contact-us' method='POST'>
          <div className="fullname">
            <div className="input-item">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" onChange={handleChange} value={formData.first_name} />
            </div>
            <div className="input-item">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" onChange={handleChange} value={formData.last_name} />
            </div>
          </div>
          <div className="input-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="input-item">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" onChange={handleChange} value={formData.message} />
          </div>
          <input type="submit" id="submit-button" name="submit-button" value='Submit' />
        </Form>
        {res?.status == 201 && <Toast />}

      </section>
    </>
  )
}