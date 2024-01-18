import { Link, useLoaderData } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import '../styles/components/sessiontype/SessionType.css'

export default function SessionType() {

  const sessionTypesData = useLoaderData()

  useEffect(() => {
    console.log(sessionTypesData.data)
  }, [sessionTypesData])

  return (
    <>
      <section className="sessiontypes">
        <h1 className="hero-title">Choose your session type...</h1>
        <section className="session-type-cards">
          {sessionTypesData.data.map(type => {
            return (
              <Card key={type.id}>
                <Card.Body>
                  <Card.Title>{type.name}</Card.Title>
                  <Card.Text>{type.brief}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}

        </section>
        <div className="buttons">
          <Link to='/booking/coach'>
            <button id='next-button' value='Next'>Next</button>
          </Link>
        </div>
      </section>

    </>
  )
}