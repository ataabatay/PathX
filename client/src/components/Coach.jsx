import { useEffect, useState } from "react"
import { Link, useLoaderData, useLocation } from "react-router-dom"
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

  const [modalShow, setModalShow] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    console.log(allCoachesData.data)
    console.log(session_type)
    console.log(filteredCoaches)
  }, [allCoachesData, session_type, filteredCoaches])

  function handleHover(e) {
    const target = e.target
    const cardId = target.id

    if (target.classList.contains('hovered')) {
      target.classList.remove('hovered')
      setHoveredCardId(null)
    } else {
      target.classList.add('hovered')
      setHoveredCardId(cardId)
    }
  }

  return (
    <>
      <section className="select-coach">
        <h1>Select a coach for your session...</h1>
        <section className="coach-cards">
          {filteredCoaches.map(coach => {
            return (
              < Card key={coach.id}>
                <Card.Body
                  id={coach.id}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  <div id="round-img"
                    style={{ backgroundImage: `url(${coach.image})` }}></div>
                  <Card.Title>{coach.name}</Card.Title>
                </Card.Body>
                <div className="card-text">
                  <Card.Text style={{ display: 'none' }}>{coach.brief}</Card.Text>
                </div>
              </Card>
            )
          })
          }
        </section>
        <section className="booking-confirmation">
          <button
            id='next-button'
            value='Next'
            onClick={() => setModalShow(true)}>
            Next
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