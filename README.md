# TaskBuddy Backend

## Project Description
TaskBuddy is a simple to-do app where users can add, edit, delete, and organize tasks effectively. This backend is built using Node.js, Express.js, and MongoDB.

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Third-party Packages:**
  - bcryptjs
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - nodemailer
  - nodemon

## Installation Setup
Follow these steps to set up the backend locally:

### 1. Clone the Repository
```sh
git clone https://github.com/Johnvilin-Sibina/Task-Manager-Backend
cd taskbuddy-backend
```

### 2. Install Dependencies
```sh
npm init -y
npm i express nodemon bcryptjs jsonwebtoken cors dotenv mongoose nodemailer
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGODB_URL=<your_mongo_db_connection_string>
JWT_SECRET_KEY=<your_jwt_secret_key>
PASSMAIL=<your_email>
PASSKEY=<your_secret_key>
```

### 4. Start the Server
```sh
npm start
```

The server will start running on `http://localhost:5000`.
### For development mode with live reloading
```sh
npm run dev
```

## API Documentation
The complete API documentation for TaskBuddy is available at:
[TaskBuddy API Documentation](https://documenter.getpostman.com/view/33763328/2sAYdhLWXW)
