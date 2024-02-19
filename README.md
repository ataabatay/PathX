# Project 4 - PathX

## Description
PathX is a solo project and my final portfolio project for the software engineering course I have taken during Oct 2023 - Jan 2024. I have worked on creating a full-stack web app using Django for backend and React for frontend. PathX is a coaching platform targeted for young professionals relatively early in their career looking for assistance around anything from therapy and financial coaching to career progression, parenting coaching and mentorship to be able to take the next step with confidence. The app includes various functionalities such as the ability to create a coaching session by selecting a session from available session types and a coach from the available coaches who can provide that service. It also includes a “My Sessions” page where you can visualise the upcoming and past sessions you have created and make adjustments to them.

## Deployment Link
Visit [PathX](https://pathx-16fc8a316d8e.herokuapp.com/).

## Getting Started/Code Installation
1. Access the source code via the 'Clone or download' button,
2. Run “npm i” inside terminal to install the packages,
3. Run “npm run serve” to run the server side,
4. Run “npm run dev” to run the client side,
5. Follow the link.

## Timeframe & Working Team
This was a solo project and I worked on it for roughly 7 days.

## Technologies Used
### Neon
Used to create a serverless PostgreSQL database to store user, coach, coaching type and coaching session data instances.

### Django
Served as the server-side framework for the project facilitating the handling of HTTP requests, routing, middleware integration and the interaction between the web server and the database.

### React.js
Used for developing the front-end or client-side of the app. React was particularly significant as it helped us efficiently update and render components, instead of updating the entire DOM every time there's a change as well as helping us create and manage navigation.

### SASS
Used to design all the components and overall design of the app. 

### Other
Several libraries were used for components such as React Bootstrap for accordion and MUI for date and time pickers. 

## Brief
The project aimed to develop a comprehensive full-stack application, incorporating a custom backend and frontend. The main goal was to build a Django backend to serve data from a serverless PostgreSQL database (Neon), which would be consumed by a separate React frontend. The application had to be a complete product, featuring multiple relationships and CRUD functionality for at least a couple of models to provide a robust user experience.

### Technical Requirements
This project required creating a full-stack web application, developing both backend and frontend components. It involved using Python Django API for efficient data management with serverless PostgreSQL as the database. The React frontend independently interacted with the API. CRUD functionality for at least a couple of models had to be implemented for a complete user experience. User stories and wireframes had to guide development, while a visually appealing design had to be prioritised. The final application had to be deployed online for public accessibility.

### Deliverables
The project deliverables included a functional web app hosted on GitHub. The repository will have a detailed version history, and the readme.md file will provide insights, screenshots, technology explanations, installation instructions, and links to user stories, and wireframes. Descriptions of challenges faced during development will provide insights. 

## Planning
For the duration of the project, Jira was used for project management with tickets created for the MVP, backend, frontend, designs, general setup and v1.

I started the planning by doing research on the online therapy and coaching space to find similar applications and to draw inspiration on the possible user journeys. 

![1](https://github.com/ataabatay/PathX/assets/25418371/9892a775-1e71-42cd-92eb-4d0863ca1c99)

![2](https://github.com/ataabatay/PathX/assets/25418371/0ed6a7b6-7897-4c8e-a5c9-fea86357b1dc)

![3](https://github.com/ataabatay/PathX/assets/25418371/0ad9b9bf-61b9-4ab2-92ad-a295fccb6908)

Once the research was completed I drawed the wireframes in Figma and created the user journey.

![4](https://github.com/ataabatay/PathX/assets/25418371/7fc76cc5-06d4-4654-bb87-f38585ba95a9)

Wireframes continued…

![5](https://github.com/ataabatay/PathX/assets/25418371/40ecf606-73d2-483a-8635-7264b3bfcb9e)

Following the wireframes I used QuickDBD to create the models and the relationship diagram among them. 

![6](https://github.com/ataabatay/PathX/assets/25418371/1ec9c940-1bc5-4c86-8fcc-02668394b092)

Then I moved on to create the tickets in Jira and create the board for the project.

![image](https://github.com/ataabatay/PathX/assets/25418371/a76cd507-4985-481c-9c79-254374f865a5)

At this point, prep-work is complete and actual development has begun. 

## **Build Process**
### Day 1
* Created repo and cloned it to local to get started;
* Created the Django project;
* Created initial versions of the User, Session Types, Coach, Questionnaire and Coaching Session models.

```python
class Coach(models.Model):
  name = models.CharField(max_length=255)
  session_types = models.ManyToManyField(
    to='session_types.Session_Type',
    related_name='coaches'
  )
  brief = models.CharField(max_length=1000, null=True, blank=True, default='Coach brief.')
  image = models.CharField(null=True, blank=True, default='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

  def __str__(self):
    return f'{self.name}'
```

```python
from django.db import models

# Create your models here.
class Session_Type(models.Model):
  name = models.CharField(max_length=255)
  brief = models.CharField(max_length=255)

  def __str__(self):
    return self.name
```

```python
from django.db import models

# Create your models here.
class Coaching_Session(models.Model):
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='coaching_sessions'
  )
  session_type = models.ForeignKey(
    to='session_types.Session_Type',
    on_delete=models.PROTECT,
    related_name='coaching_sessions',
    blank=True,
    null=True
  )
  coach = models.ForeignKey(
    to='coaches.Coach',
    on_delete=models.DO_NOTHING,
    related_name='sessions',
    blank=True,
    null=True
  )
  scheduled_date = models.DateField()
  scheduled_time = models.TimeField()
  upcoming = models.BooleanField(default=True)

  def __str__(self):
    return f'Coachee: {self.owner} @ {self.scheduled_date}: {self.session_type} - {self.coach}'
```

This most difficult bit here was to conceptualize what is the best way to maintain different data models and the relationship between them. The major factor in the decision making process was to create ease and reusability for when the front end makes requests. This is why the coaching session model holds multiple relationships to users as well as coaches and session types.

### Day 2
* Created GET and POST endpoints for Session Types;
* Created GET single coach endpoint;
* Created GET, POST, PATCH and DELETE endpoints for coaching sessions.

Generic Views were utilised from Django Framework to facilitate the process and create endpoints with ease. Some of the views were expanded and customised later on.

```python
from django.shortcuts import render
from .serializers.common import Coaching_SessionSerializer
from .models import Coaching_Session
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly

# Create your views here.
class Coaching_SessionListCreateView(OwnerListCreateView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer
  permission_classes = [IsAuthenticated]

class Coaching_SessionRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
  queryset = Coaching_Session.objects.all()
  serializer_class = Coaching_SessionSerializer
  permission_classes = [IsOwnerOrReadOnly]
```

### Day 3
* Set up the React App;
* Created POST endpoint for registering;
* Created seed data for coaches;
* Created seed data for unique sessions;
* Created seed data for users;
* Created seed data for session types;
* Set up the React router;
* Completed Navbar component and designs;
* Completed Footer component and designs.

Snippet from the Router

```python
{
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
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
          action: async ({ request }) => deleteSession(request)
        },
        {
          path: '/booking',
          element: <Booking />,
          children: [
            {
              path: '/booking/datetime',
              element: <DateTime />,
              action: async ({ request }) => createCoachingSession(request)
            }
...
```

As the booking was done in multiple pages, additional children of pages were utilised to the existing booking child page. Also relevant actions and loaders were introduced at a simple level at this stage with empty function. These were expanded to their final state later in development. 

### Day 4
* Completed Home page component and designs;
* Completed FAQs page component and designs;
* Completed Contact us page component and designs;
* Completed My Sessions page component and designs.

Snippet from the FAQs page where an accordion was used

```python
export default function FAQs() {
  return (
    <>
      <section className="faqs">
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="image">
          <img src={FAQImage} alt="faqs-image" />
        </div>
        <div className="questions-answers-accordion">
          <div className="arrow-icon">
            <img src={ArrowIcon} alt="" />
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What can I expect from my coach?</Accordion.Header>
              <Accordion.Body>
                Most of our clients come to us with concerns such as 'I’m not sure what my next steps are' or 'I’m not fulfilled in my career, what should I do?’ By working with you, your coach can help you gain clarity about your career goals, identify your strengths and create a roadmap for achieving those goals.  Instead of giving you direct instructions, your coach will ask you the right questions and guide you towards your own conclusions which will result in lasting transformation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I only speak about my career with my coach?</Accordion.Header>
              <Accordion.Body>
                As our careers don’t live in silos, we encourage discussing areas of your life such as relationships and health with your coach that might impact your career journey.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How does Pathio select its coaches?</Accordion.Header>
              <Accordion.Body>
                Our coaches hold accreditations from reputable coaching institutions such as ICF, EMCC, and AC, and/or have extensive experience working in creative industries / building their own businesses. We only work with coaches that have a deep passion in helping creative individuals find fulfillment and success.
              </Accordion.Body>
...
```

### Day 5
* Started booking component with date and time selection and session types pages;
* Created GET and POST endpoints for contact us page to allow the client to send messages which triggers a POST request to the server and stores the message in the backend.

The super interesting item that I have used for the first time here was the options of useNavigate(). I have used the "state" parametre within the useNavigate hook to pass the selected session type for to the next page while making a request to server side. This method allowed me to create a session instance in the backend with a POST request while including just the date & time and continuously make PUT requests in the following pages to build the full session with a session type, and a coach.

Date and time page with the initial POST request.

```python
export default function DateTime() {

  const res = useActionData()
  const navigate = useNavigate()

  const [createSessionFormData, setCreateSessionFormData] = useState({
    scheduled_date: '',
    scheduled_time: '',
    owner: getActiveUser(),
  })

  function handleDateChange(e) {
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_date: `${e.$y}-${e.$m + 1}-${e.$D}`
    })
  }
  function handleTimeChange(e) {
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_time: `${e.$H}:${e.$m}`
    })
  }

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      navigate(`/booking/${res.data.id}/sessiontype`)
    }
  },[res, navigate])

  return (
    <>
      <section className='date-time-picker'>
        <h1 className="hero-title">Select a date and time for your session...</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onAccept={handleDateChange} />
          <TimePicker onAccept={handleTimeChange} />
        </LocalizationProvider>
        <Form className='form' method='POST'>
          <input type="hidden" name='owner' value={createSessionFormData.owner}></input>
          <input type="hidden" name='scheduled_date' value={createSessionFormData.scheduled_date}></input>
          <input type="hidden" name='scheduled_time' value={createSessionFormData.scheduled_time}></input>
          <button id='next-button' value='Next' type="submit">Next</button>
        </Form>
      </section>
    </>
  );
}
```

Session type page with the PUT request to add the session type to the session created in the previous page.

```python
  // link to the next page
  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      navigate(`/booking/${res.data.id}/coach`, {
        state: {
          session_type: selectedSessionType
        }
      })
    }
  }, [res, navigate])

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
```

### Day 6
* Created POST endpoint for Login;
* Created authorizations for each endpoint;
* Design fixes;
* Completed Coaches page component in the booking journey as well as filtering functionality to only show the coaches that can provide the session type selected;
* Completed Date & Time selection page component in the booking journey using custom MUI components for date and time pickers.

Coaches page where the frontend makes a PUT request to add a coach to the session that was just created.

```python
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
      </section >
    </>
  )
}
```

### Day 7
* Completed Register page component and designs;
* Completed Sign Out functionality;
* Created a loading component for page loads;
* Created DELETE functionality for sessions on My Session page;
* Further designs to create selection effects on session type selected and coach selection pages;
* Created a POST request functionality for the Date & Time page to create a session upon selecting a date and time for a session;
* Create a PUT request functionality for the Session Types page component to make an update request to a session that was created on the previous page to add the session type selected by the user.
* Create a PUT request functionality for the Coach selection page component to make an update request to a session that was created on the previous page to add the coach selected by the user.

## Challenges
I have made the decision of designing as I create each page which on its own brought about an inherent issue of slow delivery of each page. At the same time, upon finishing the project it was completed as a whole with the designs which can be seen as a positive depending on perspective.

The biggest challenge I took on this project was to create a multi-step form which is something I had not done before. There were several ways I could go about the multi-step form: create an object that gets passed down to the next page with added information one by one. On the final page the object is completed and a POST request to create a session is done only on the last page with the complete object; or alternatively; the first page makes a POST request and each following page makes a PUT request to adjust the session that was created on the first page. I chose to go with the latter as it sounded a more interesting way of doing this task, as well as it would allow me to create a better user journey in case users wanted to go back and forth to make changes to the session they were creating. This task was by far the most interesting and challenging part of my project and the end result is a triumph for me. Below are snippets from the code:

**The router setup for the booking journey**

```javascript
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
      action: async ({ request, params }) => addCoach(request, params.sessionId)
    },
  ]
}
```

The action functions to create a session, add a session type and a coach

```javascript
export async function createCoachingSession(request) {
  const data = await formToObj(request)
  return await axios.post('/api/coaching_sessions/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function addSessionType(request, sessionId) {
  const data = await formToObj(request)
  return await axios.patch(`/api/coaching_sessions/${sessionId}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function addCoach(request, sessionId) {
  const data = await formToObj(request)
  return await axios.patch(`/api/coaching_sessions/${sessionId}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
```

Date Time component where the initial session is created and navigation to session type selection page

```javascript
  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      navigate(`/booking/${res.data.id}/sessiontype`)
    }
  },[res, navigate])

  return (
    <>
      <section className='date-time-picker'>
        <h1 className="hero-title">Select a date and time for your session...</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onAccept={handleDateChange} />
          <TimePicker onAccept={handleTimeChange} />
        </LocalizationProvider>
        <Form className='form' method='POST'>
          <input type="hidden" name='owner' value={createSessionFormData.owner}></input>
          <input type="hidden" name='scheduled_date' value={createSessionFormData.scheduled_date}></input>
          <input type="hidden" name='scheduled_time' value={createSessionFormData.scheduled_time}></input>
          <button id='next-button' value='Next' type="submit">Next</button>
        </Form>
      </section>
    </>
  );
}
```

Another challenge I cherished was using custom components created by others. For the first time I used MUI components and trying to figure out how to use them was an interesting and rewarding challenge.

## **Wins**
My interactions on the app are pretty smooth and gives out the feeling of a modern web app. The fact that I set out to do a multi-step form and managed to implement it was a big win. Overall design of the website looks and feels sleek.

## **Key learnings**
This was the first time I tried to design as I created components. I am yet to decide which way is better even though I still see a better value in creating simple functionality to test things. Going all out on designing components still runs the bigger risk of working on components that are not used at all in the end and wasting huge amounts of time.

## **Bugs**
No major bugs exist, the load times of pages are bit on the longer side due to using the free version of Neon.

## **Future Improvements**
There is a lot of room for improvement. Specific areas where improvement is necessary are:
* Loading spinner or equivalent to make users aware that the page is actually loading;
* Coaches page only show the image of one coach due to a mistake in deployment wiping out the previous images clear;
* There is no edit functionality of session on My Sessions page which is a must add;
* There is no error handling on register, login or elsewhere which needs to be added;
* The entire questionnaire user journey to ask questions to users before the registry is missing and will be added as that forms the core of your profile;
* A booking confirmation modal is to be added to show you the selections you have made for your session before taking you to My Sessions page;
* Responsiveness for other device sizes.
