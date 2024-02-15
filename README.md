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

**_(Images to come)_**

**_(Images to come)_**

**_(Images to come)_**

Once the research was completed I drawed the wireframes in Figma and created the user journey.

**_(Images to come)_**

Wireframes continued…

**_(Images to come)_**

Following the wireframes I used QuickDBD to create the models and the relationship diagram among them. 

**_(Images to come)_**

Then I moved on to create the tickets in Jira and create the board for the project.

**_(Images to come)_**

At this point, prep-work is complete and actual development has begun. 

## **Build Process**
### Day 1
* Created repo and cloned it to local to get started;
* Created the Django project;
* Created initial versions of the User, Session Types, Coach, Questionnaire and Coaching Session models.

### Day 2
* Created GET and POST endpoints for Session Types;
* Created GET single coach endpoint;
* Created GET, POST, PATCH and DELETE endpoints for coaching sessions.

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

### Day 4
* Completed Home page component and designs;
* Completed FAQs page component and designs;
* Completed Contact us page component and designs;
* Completed My Sessions page component and designs.

### Day 5
* Started booking component with session types page;
* Created GET and POST endpoints for contact us page to allow the client to send messages which triggers a POST request to the server and stores the message in the backend. 

### Day 6
* Created POST endpoint for Login;
* Created authorizations for each endpoint;
* Design fixes;
* Completed Coaches page component in the booking journey as well as filtering functionality to only show the coaches that can provide the session type selected;
* Completed Date & Time selection page component in the booking journey using custom MUI components for date and time pickers.

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

**_(Images to come)_**

The action functions to create a session, add a session type and a coach

**_(Images to come)_**

Date Time component where the initial session is created and navigation to session type selection page

**_(Images to come)_**

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
