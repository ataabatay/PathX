import { Form, useActionData, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setToken } from '../utils/helpers/common'

export default function Login() {

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if(res?.status === 200) {
      setToken(res.data.access)
      navigate('/mysessions')
    }
  },[navigate, res])

  return (
    <>
      <section className="login">
        <h1>Log In</h1>
        <Form className='login-form' method='POST'>
          <input type="text" className="username" name='username' placeholder='Enter username...' />
          <input type="password" className="password" name='password' placeholder='Enter password...' />
          <button type='submit'>Login</button>
        </Form>
      </section>
    </>
  )
}