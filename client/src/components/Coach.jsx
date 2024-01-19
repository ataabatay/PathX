import { useEffect, useState } from "react"
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import '../styles/components/coaches/Coaches.css';
import Modal from 'react-bootstrap/Modal';
import BookingConfirmationModal from "./BookingConfirmationModal.jsx";
import Image from 'react-bootstrap/Image';


export default function Coach() {

  const allCoachesData = useLoaderData()
  const { state: { session_type: { session_type } } } = useLocation()
  const filteredCoaches = allCoachesData.data.filter(coach => {
    return coach.session_types.some(type => type.id === session_type)
  })
  const sessionId = useParams()
  const [modalShow, setModalShow] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState('')

  function handleClick(e) {
    const selectedCoachId = parseInt(e.currentTarget.id)
    if (selectedCoach.id === selectedCoachId) {
      setSelectedCoach(null)
    } else {
      setSelectedCoach(selectedCoachId)
    }
    console.log(e.currentTarget)
  }

  useEffect(() => {
    console.log(selectedCoach)
  }, [selectedCoach, filteredCoaches])


  return (
    <>
      <section className="select-coach">
        <h1>Select a coach for your session...</h1>
        <section className="coach-cards">
          {filteredCoaches.map(coach => {
            return (
              < Card
                key={coach.id}
                onClick={handleClick}
                id={coach.id}
                className={coach.id === (selectedCoach) ? 'selected' : ''}>
                <Card.Body>
                  <div id="round-img"
                    style={{ backgroundImage: `url(${coach.image})` }}></div>
                  <Card.Title>{coach.name}</Card.Title>
                <div className="card-text">
                  <Card.Text>{coach.brief}</Card.Text>
                </div>
                </Card.Body>
              </Card >
            )
          })
          }
        </section>
        <section className="booking-confirmation">
          <button
            id='next-button'
            value='Next'
            onClick={() => setModalShow(true)}>
            Create Session
          </button>
          <BookingConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </section>
      </section >
    </>
  )
}