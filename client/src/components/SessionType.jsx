import { Form, useActionData, useLoaderData, useNavigate, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import '../styles/components/sessiontype/SessionType.css'

export default function SessionType() {

  const res = useActionData()
  const sessionTypesData = useLoaderData()
  const navigate = useNavigate()
  const [selectedSessionType, setSelectedSessionType] = useState('')

  // make session type selection
  function handleClick(e) {
    const clickedCardId = parseInt(e.currentTarget.id)
    if (selectedSessionType.session_type === clickedCardId) {
      setSelectedSessionType({
        session_type: null
      })
    } else {
      setSelectedSessionType({
        session_type: clickedCardId
      })
    }
  }
  
  // link to the next page
  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      navigate(`/booking/${res.data.id}/coach`, {
        state: {
          session_type: selectedSessionType,
        }
      })
    }
  }, [res, navigate, selectedSessionType])

  return (
    <>
      <section className="sessiontypes">
        <h1 className="hero-title">Choose your session type...</h1>
        <section className="session-type-cards">
          {sessionTypesData.data.map(type => {
            return (
              <Card
                key={type.id}
                onClick={handleClick}
                id={type.id}
                className={parseInt(selectedSessionType.session_type) === parseInt(type.id) ? 'selected' : ''}
              >
                <Card.Body>
                  <Card.Title>{type.name}</Card.Title>
                  <Card.Text>{type.brief}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </section>
        <div className="buttons">
          <Form className='form' method='PATCH'>
            <input type="hidden" name='session_type' value={parseInt(selectedSessionType.session_type)}></input>
            <button id='next-button' value='Next'>Next</button>
          </Form>
        </div>
      </section>
    </>
  )
}