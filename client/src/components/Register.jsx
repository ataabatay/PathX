import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import '../styles/components/register/Register.css'

export default function Register() {

  const res = useActionData()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    } 
    // else if (res?.status === 400) {
    //   setError('Passwords do not match.')
    // }
  }, [res, navigate])

  return (
    <>
      <section className="register">
        <h1 className="title">Register</h1>
        <Form className='register-form' method='POST'>
          <label>Username</label>
          <input type="text" className="username" name='username' />
          <label>First Name</label>
          <input type="text" className="first_name" name='first_name' />
          <label>Last Name</label>
          <input type="text" className="last_name" name='last_name' />
          <label>Email</label>
          <input type="text" className="email" name='email' />
          <label>Password</label>
          <input type="password" className="password" name='password' />
          <label>Password again</label>
          <input type="password" className="password_confirmation" name='password_confirmation' />
          <button type='submit'>Register</button>
        </Form>
        {error && <p className='error-message' style={{ marginTop: '2em' }}>{error}</p>}
      </section>
    </>
  )
}