import { Outlet, useOutletContext } from "react-router-dom"

export default function Booking() {

  const [activeUserId, setActiveUserId] = useOutletContext()

  return (
    <>
        <Outlet context={[activeUserId, setActiveUserId]}/>
    </>
  )
}