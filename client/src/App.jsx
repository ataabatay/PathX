// Component imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router'

export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}



// const [data, setData] = useState([])

// async function apiCall() {
//   try {
//     const res = await axios.get('/api/coaching_sessions/')
//     return res.data
//   } catch (error) {
//     console.log(error)
//   }
// }

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await apiCall()
//     setData(response)
//   }
//   fetchData()
// },[])

// useEffect(() => {
//   console.log(data)
// },[data])