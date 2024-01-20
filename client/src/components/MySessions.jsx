import { useEffect, useState } from "react"
import { Form, useActionData, useLoaderData } from "react-router-dom"
import '../styles/components/mysessions/MySessions.css'
import EditButton from '../assets/icons/editicon.svg';
import DeleteButton from '../assets/icons/deleteicon.svg';
import axios from "axios";
import { getToken } from "../utils/helpers/common";

export default function MySessions() {

  const res = useLoaderData()
  const actionData = useActionData()
  const coaches = res.coaches.data
  const session_types = res.sessionTypes.data
  const [sessions, setSessions] = useState(res.sessions)

  useEffect(() => {
    // console.log(res)
    console.log(actionData)
  }, [])

  async function handleClick(e) {
    const targetSessionId = parseInt(e.currentTarget.id)
    console.log(targetSessionId)
    try {
      await axios.delete(`/api/coaching_sessions/${targetSessionId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      setSessions(prevSessions => prevSessions.filter(session => session.id !== targetSessionId))
    } catch (error) {
      console.error("Error deleting session:", error)
    }
    return
  }

  return (
    <>
      <section className="mysessions">
        <h1>My Sessions</h1>
        <section className="activesessions">
          {sessions.length === 0 ? (
            <h2 style={{marginTop: '300px', fontSize: '1.4em'}}>No Upcoming Sessions...</h2>
          ) : (
            sessions.map(session => {
              const coach = coaches.find(coach => coach.id === session.coach)
              const sessionType = session_types.find(
                type => type.id === session.session_type
              )
              return (
                <div className="uniquesession" key={session.id}>
                  <div className="session-details">
                    <p className="coach-sessiontype">
                      <strong>
                        {sessionType
                          ? sessionType.name
                          : "Unknown Session Type"}
                      </strong>{" "}
                      with{" "}
                      {coach ? coach.name : "Unknown Coach"}
                    </p>
                    <p className="date-time">
                      {new Date(session.scheduled_date).toDateString()},{" "}
                      {session.scheduled_time}
                    </p>
                  </div>
                  <div className="icons">
                    <button className="editbutton">
                      <img src={EditButton} alt="edit-button" />
                    </button>
                    <button
                      className="deletebutton"
                      id={session.id}
                      onClick={handleClick}
                    >
                      <img src={DeleteButton} alt="delete-button" />
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </section>
        <section className="pastsessions"></section>
      </section>
    </>
  )
}