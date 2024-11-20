# Contact Management Project

## Project Description

This Contact Management application allows users to manage their contacts efficiently, including adding, editing, deleting, and viewing contact details. Built with the MERN stack (MongoDB, Express, React, Node.js), this app provides a full-stack solution for handling contact data in a user-friendly interface.

### Major Technical Decisions

1. **Backend Framework**: Chose Express and Node.js for scalability and simplicity in handling API requests.
2. **Database**: Used MongoDB for flexibility and easy integration with JSON-based data structures.
3. **Frontend Framework**: Used React for building a dynamic, responsive user interface.
4. **Authentication**: Added basic user authentication (modify if applicable).
5. **State Management**: Employed Context API for simple and effective state management across the app.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js and npm
- MongoDB

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/avanishyadav911/Contact-Management.git
   cd Contact-Management
### Install Backend Dependencies:
cd backend
npm install
### Set Up Environment Variables: In the backend folder, create a .env file and add the following:
- PORT=5000
- MONGO_URI=<your_mongo_db_uri>

### Start the Backend Server:
- npm start
### Install Frontend Dependencies:
- cd ../frontend
- npm install
### Start the Frontend Development Server:
npm run dev


## How Each Part of the App Works

- **Frontend (React)**: 
  - The frontend is built with React, providing a responsive, dynamic interface for managing contacts.
  - **Components**: The app is organized into several reusable components:
    - **ContactList**: Displays a list of all saved contacts.
    - **ContactForm**: Used for adding and editing contact details.
    - **ContactItem**: Represents individual contact details and includes options to edit or delete.
  - **State Management**: Context API is used for global state management, allowing components to access and modify contact data seamlessly.
  - **API Integration**: React hooks, including `useEffect`, are used to fetch data from the backend and manage updates to the UI in real-time.

- **Backend (Express & Node.js)**:
  - The backend is built with Express and Node.js, handling API requests and routing.
  - **RESTful API**: Provides CRUD endpoints for contact data management:
    - **POST /api/contacts**: Adds a new contact.
    - **GET /api/contacts**: Fetches a list of all contacts.
    - **PUT /api/contacts/:id**: Updates a contact by ID.
    - **DELETE /api/contacts/:id**: Deletes a contact by ID.
  - **Database Interaction**: Uses Mongoose to interact with MongoDB, managing data storage and retrieval efficiently.
 

- **Database (MongoDB)**:
  - MongoDB serves as the database for the app, storing persistent user and contact data.


## Challenges and Solutions

- **Challenge**: Integrating MongoDB with the backend and setting up the schema.
  - **Solution**: Used Mongoose for database modeling, which simplified interactions with MongoDB. Defined schema validation for contact details to ensure data consistency and avoid issues with incorrect data formats.

- **Challenge**: Handling asynchronous calls and state management in the frontend.
  - **Solution**: Leveraged the Context API for effective global state management, making data accessible across components. Additionally, used `useEffect` hooks in React to manage asynchronous API calls, ensuring smooth data fetching and automatic updates to the UI without unnecessary re-renders.



