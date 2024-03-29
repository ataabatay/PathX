import { Form, useActionData, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { setToken } from '../utils/helpers/common'
import { useOutletContext } from 'react-router-dom'
import '../styles/components/login/Login.scss'

export default function Login() {

  const [activeUserId, setActiveUserId] = useOutletContext()
  const res = useActionData()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      setActiveUserId(res.data.access)
      navigate('/mysessions')
    } else if (res?.status === 401) {
      setError('Invalid username or password.')
    }
  }, [navigate, res, setActiveUserId])

  return (
    <>
      <section className="login">
        <h1>Log In</h1>
        <Form className='login-form' method='POST'>
          <label>Username</label>
          <input type="text" className="username" name='username' />
          <label>Password</label>
          <input type="password" className="password" name='password' />
          <button type='submit'>Login</button>
        </Form>
          {error && <p className='error-message' style={{marginTop: '2em'}}>{error}</p>}
      </section>
    </>
  )
}