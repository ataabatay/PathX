/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

export default function BookingConfirmationModal(props) {
  return (
    <>
      <section className="modal">
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Link to={'/mysessions'}>
              <button onClick={props.onHide}>Confirm Booking</button>
            </Link>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  )
}