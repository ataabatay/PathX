import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import '../styles/components/mysessions/MySessions.css'
import EditButton from '../assets/icons/editicon.svg';
import DeleteButton from '../assets/icons/deleteicon.svg';

const options = {
  weekday: "long",
  year: "long",
  month: "long",
  day: "long",
};

export default function MySessions() {

  const res = useLoaderData()
  const coaches = res.coaches.data
  const session_types = res.sessionTypes.data
  const sessions = res.sessions

  useEffect(() => {
    // console.log(res)
    console.log(coaches[0].name)
  }, [])

  return (
    <>
      <section className="mysessions">
        <h1>My Sessions</h1>
        <section className="activesessions">
          {sessions.map(session => {
            const coach = coaches.find(coach => coach.id === session.coach);
            const sessionType = session_types.find(type => type.id === session.session_type);
            return (
              <div className="uniquesession" key={session.id}>
                <div className="session-details">
                  <p className="coach-sessiontype"><strong>{sessionType ? sessionType.name : 'Unknown Session Type'}</strong> with {coach ? coach.name : 'Unknown Coach'}</p>
                  <p className="date-time">
                    {new Date(session.scheduled_date).toDateString()}, {session.scheduled_time}</p>
                </div>
                <div className="icons">
                  <div className="editbutton">
                    <img src={EditButton} alt="edit-button" />
                  </div>
                  <div className="deletebutton">
                    <img src={DeleteButton} alt="delete-button" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="pastsessions">

        </section>
      </section>

    </>
  )
}