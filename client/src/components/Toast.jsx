import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';


export default function ToastNotification() {

  const [show, setShow] = useState(true);

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="toast-text">Message sent!</strong>
        </Toast.Header>
      </Toast>
    </>
  )
}