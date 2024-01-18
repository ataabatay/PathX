import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import '../styles/components/coaches/Coaches.css';
import Modal from 'react-bootstrap/Modal';
import BookingConfirmationModal from "./BookingConfirmationModal.jsx";

export default function Coach() {

  const allCoachesData = useLoaderData()
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log(allCoachesData.data)
  }, [allCoachesData])

  return (
    <>
      <section className="select-coach">
        <h1>Select a coach for your session...</h1>
        <section className="coach-cards">
          {allCoachesData.data.map(coach => {
            return (
              < Card key={coach.id}>
                <Card.Body>
                  <img src={coach.image} />
                  <Card.Title>{coach.name}</Card.Title>
                  <Card.Text>{coach.brief}</Card.Text>
                </Card.Body>
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