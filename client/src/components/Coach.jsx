import { useEffect, useState } from "react"
import { Form, Link, useActionData, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import '../styles/components/coaches/Coaches.css';
import Modal from 'react-bootstrap/Modal';
import BookingConfirmationModal from "./BookingConfirmationModal.jsx";
import Image from 'react-bootstrap/Image';


export default function Coach() {

  const res = useActionData()
  const navigate = useNavigate()
  const allCoachesData = useLoaderData()
  const { state: { session_type: { session_type } } } = useLocation()
  const filteredCoaches = allCoachesData.data.filter(coach => {
    return coach.session_types.some(type => type.id === session_type)
  })
  const [selectedCoachId, setSelectedCoachId] = useState('')
  // const [modalShow, setModalShow] = useState(false)

  function handleClick(e) {
    const clickedCoachId = parseInt(e.currentTarget.id)
    if (selectedCoachId === clickedCoachId) {
      setSelectedCoachId(null)
    } else {
      setSelectedCoachId(clickedCoachId)
    }
  }

  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      navigate(`/mysessions`)
    }
  }, [res, navigate])
  
  return (
    <>
      <section className="select-coach">
        <h1>Select a coach for your session...</h1>
        <section className="coach-cards">
          {filteredCoaches.map(coach => {
            return (
              < Card
                key={coach.id}
                id={coach.id}
                onClick={handleClick}
                className={selectedCoachId === parseInt(coach.id) ? 'selected' : ''}
              >
                <Card.Body>
                  <div id="round-img"
                    style={{ backgroundImage: `url(${coach.image})` }}></div>
                  <Card.Title>{coach.name}</Card.Title>
                </Card.Body>
                <div className="card-text">
                  {/* <Card.Text>{coach.brief}</Card.Text> */}
                </div>
              </Card>
            )
          })
          }
        </section>
        <Form className='form' method='PATCH'>
          <input type="hidden" name='coach' value={selectedCoachId}></input>
          <button id='next-button' value='Next'>Create Session</button>
        </Form>


        {/* <section className="booking-confirmation">
          <button
            id='next-button'
            onClick={() => setModalShow(true)}>
            Create Session
          </button>
          <BookingConfirmationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </section> */}

      </section >
    </>
  )
}