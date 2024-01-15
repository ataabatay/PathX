// Setup Imports
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Styles Imports
import './styles/main.css'

// Components
import About from './components/About.jsx'
import Booking from './components/Booking.jsx'
import Coach from './components/Coach.jsx'
import Contact from './components/Contact.jsx'
import DateTime from './components/DateTime.jsx'
import FAQs from './components/FAQs.jsx'
import Login from './components/Login.jsx'
import MySessions from './components/MySessions.jsx'
import Questionnaire from './components/Questionnaire.jsx'
import Register from './components/Register.jsx'
import SessionType from './components/SessionType.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/questionnaire',
          element: <Questionnaire />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/mysessions',
          element: <MySessions />,
        },
        {
          path: '/booking',
          element: <Booking />,
          children: [
            {
              path: 'booking/datetime',
              element: <DateTime />,
            },
            {
              path: 'booking/sessiontype',
              element: <SessionType />,
            },
            {
              path: 'booking/coach',
              element: <Coach />,
            },
          ]
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/faqs',
          element: <FAQs />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
