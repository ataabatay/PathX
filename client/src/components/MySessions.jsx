import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"



export default function MySessions() {

  const res = useLoaderData()
  const coaches = res.coaches.data
  const session_types = res.sessionTypes.data
  const sessions = res.sessions

  useEffect(() => {
    console.log(res)
    console.log(coaches, session_types, sessions)
  }, [])

  return (
    <>
      <section className="mysessions">
        <h1>My sesssshhhhss</h1>
        <section className="activesessions">
          {sessions.map(session => {
            return (
              <div className="uniquesession" key={session.id}>
                <p className="date">{session.scheduled_date}</p>
                <p className="time">{session.scheduled_time}</p>
                {/* <p className="coach">{coaches[session.coach].name}</p> */}
                <p className="sessiontype">{session.session_type}</p>
              </div>
            )
          })}
        </section>
        <section className="pastsessions">

        </section>
      </section>

    </>
  )
}