// Setup Imports
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { addSessionType, createCoachingSession, loginUser, registerUser, sendSupportMessage } from './utils/actions.js';

// Styles Imports
import './styles/main.css'

// Components
import Home from './components/Home.jsx';
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

// Loader imports
import { getCoaches, getSessions, getSessionTypes } from './utils/loaders.js';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/questionnaire',
          element: <Questionnaire />,
        },
        {
          path: '/register',
          element: <Register />,
          action: async ({ request }) => registerUser(request)
        },
        {
          path: '/login',
          element: <Login />,
          action: async ({ request }) => loginUser(request)
        },
        {
          path: '/mysessions/',
          element: <MySessions />,
          loader: getSessions,
        },
        {
          path: '/booking',
          element: <Booking />,
          children: [
            {
              path: '/booking/datetime',
              element: <DateTime />,
              action: async ({ request }) => createCoachingSession(request)
            },
            {
              path: '/booking/:sessionId/sessiontype',
              element: <SessionType />,
              loader: getSessionTypes,
              action: async ({ request, params }) => addSessionType(request, params.sessionId),
            },
            {
              path: '/booking/:sessionId/coach',
              element: <Coach />,
              loader: getCoaches,
              action: async ({ request }) => createCoachingSession(request)
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
          action: async ({ request }) => sendSupportMessage(request)
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
