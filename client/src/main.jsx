// Setup Imports
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createCoachingSession, sendSupportMessage } from './utils/actions.js';

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
import { getSessionTypes } from './utils/loaders.js';

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
              path: '/booking/datetime',
              element: <DateTime />,
              action: async ({ request }) => createCoachingSession(request)
            },
            {
              path: '/booking/sessiontype',
              element: <SessionType />,
              loader: getSessionTypes,
            },
            {
              path: '/booking/coach',
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
          action: async ({ request }) => sendSupportMessage(request)
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
