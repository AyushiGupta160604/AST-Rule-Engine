# Rule Engine with AST

This project is a rule engine that allows users to create rules and evaluate them using an Abstract Syntax Tree (AST). It is built using the MERN stack (MongoDB, Express, React, Node.js). The project provides a user interface for creating rules and evaluating user data against them.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
  - [Install Dependencies](#install-dependencies-backend)
  - [Run the Server](#run-the-server)
- [Frontend Setup](#frontend-setup)
  - [Install Dependencies](#install-dependencies-frontend)
  - [Run the Frontend](#run-the-frontend)
- [Usage](#usage)
  - [Create a Rule](#create-a-rule)
  - [Evaluate a Rule](#evaluate-a-rule)
- [CORS Setup](#cors-setup)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Acknowlegments](#acknowledgements)

---

## Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org)
- **npm** or **yarn**: Node package manager comes with Node.js, but you can also install **yarn** as an alternative.
- **MongoDB**: (Optional if you want to use MongoDB for storing rules)

## Project Structure

The project is divided into two main directories:

```bash
root/
├── backend/    # Node.js/Express backend
└── frontend/   # React frontend
```

## Backend Setup
1. **Navigate to Backend Directory**:

    ```
    cd backend
    ```
2. **Install Dependencies**:

    ```
    npm install
    ```

#### This will install the required packages such as express, cors, body-parser, etc.

3. **Run the Server**:

    ```
    node server.js
    ```

### If you are using nodemon for development, you can run:

    nodemon server.js

The backend server will run on `http://localhost:5000`

## Frontend Setup

1. **Navigate to Frontend Directory**:

    ```
    cd frontend
    ```

2. **Install Dependencies**:
    
    ```
    npm install
    ```

3. **Run the frontend**:

    ```
    npm start
    ```

The frontend will be available on `http://localhost:3000`

## Usage
### Once both frontend and backend are running, you can start creating and evaluating rules.

### Create a Rule
- Navigate to the Create a Rule section.
- Enter a rule string (e.g., "age > 30 && department == 'Sales'").
- Click Create Rule.

### Evaluate a Rule
- Navigate to the Evaluate a Rule section.
- Enter the Rule ID of a created rule.
- Provide the user data in JSON format (e.g., { "age": 35, "department": "Sales" }).
- Click Evaluate Rule.

## CORS Setup
#### If you're encountering CORS issues between the frontend (port 3000) and backend (port 5000), ensure that CORS is enabled in your backend.

**Install CORS in the backend**:

    npm install cors


**Configure CORS in `server.js`**:

    const cors = require('cors');
    app.use(cors());


This will allow cross-origin requests from your React frontend to your Node.js backend

## Technologies Used

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: Node.js, Express, CORS
- **Database**: (Optional) MongoDB or in-memory store for rules
- **Others**: AST (Abstract Syntax Tree) for rule evaluation, JavaScript

## Screenshots
![UI](https://github.com/AyushiGupta160604/AST-Rule-Engine/blob/main/basic%20UI.png)
![Creating Rule](https://github.com/AyushiGupta160604/AST-Rule-Engine/blob/main/creating%20rule.png)
![Rule in DB](https://github.com/AyushiGupta160604/AST-Rule-Engine/blob/main/ruleCreatedinDB.png)
![Rule Evaluation](https://github.com/AyushiGupta160604/AST-Rule-Engine/blob/main/evaluation%20of%20rule.png)

## Acknowledgements

- **Node.js**: For powering the backend API.
- **Express.js**: For handling API requests.
- **React.js**: For building the frontend interface.
- **MongoDB**: For optionally storing rules.
- **Axios**: For seamless communication between the frontend and backend.
