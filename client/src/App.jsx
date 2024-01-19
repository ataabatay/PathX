// Component imports
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import { getActiveUser } from './utils/helpers/common.js'
import { useNavigation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'



export default function App() {

  const [activeUserId, setActiveUserId] = useState(getActiveUser())
  const navigation = useNavigation()

  return (
    <>
      <Navbar activeUserId={activeUserId} setActiveUserId={setActiveUserId} />
      {navigation.state === 'idle' ?
      <Outlet context={[activeUserId, setActiveUserId]} />
        :
        <div className="loading" style={{fontSize: '1.5em', textAlign:'center', marginTop: 'auto'}}>
          <Spinner style={{width: '3em', height: '2em', backgroundColor: 'black', margin: '1em'}}/>
          <Spinner style={{width: '3em', height: '2em', backgroundColor: 'black', margin: '1em'}}/>
          <Spinner style={{width: '3em', height: '2em', backgroundColor: 'black', margin: '1em'}}/>
          {/* <h1 style={{margin: '1em'}}>Loading...</h1> */}
        </div>}
      <Footer />
    </>
  )
}