# 🎓 Student Registration System

A simple and responsive **Student Registration System** built using the **MERN Stack**.

This application allows students to enter their personal and academic details through a registration form. The submitted information is sent to the backend API and stored in a **MongoDB database**.

---

## 🚀 Features

* 🎓 Student Registration Form
* 📝 Enter student details
* 📋 Form validation
* 💾 Store student information in MongoDB
* 🔗 REST API integration
* ⚡ React.js frontend
* 🖥️ Node.js & Express.js backend
* 📱 Responsive user interface
* ✅ Success and error handling

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB

### Development Tools

* Visual Studio Code
* Git
* GitHub
* MongoDB

---

## 📁 Project Structure

```text
student-registration-system/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

> The folder structure may vary depending on the project implementation.

---

## 🔄 Application Workflow

```text
Student
   │
   ▼
Registration Form
   │
   ▼
React.js Frontend
   │
   ▼
Express.js API
   │
   ▼
Node.js Backend
   │
   ▼
MongoDB
   │
   ▼
Student Details Stored
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Prasanna-20740/mern-registration-project.git
```

### 2. Navigate to the Project

```bash
cd mern-registration-project
```

---

## 🔧 Backend Setup

Open the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

---

## 🎨 Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

---

## 🗄️ MongoDB

The application uses **MongoDB** to store the student registration details submitted through the registration form.

Example data stored:

```text
Student Name
Email
Phone Number
Date of Birth
Gender
Course
College
Address
```

> The exact fields depend on the registration form implemented in the project.

---

## 🔐 Environment Variables

The MongoDB connection string is stored in a `.env` file.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

⚠️ **Do not upload `.env` files or database credentials to GitHub.**

The `.gitignore` file is configured to exclude sensitive files and `node_modules`.

---

## 📸 Screenshots

### Student Registration Page

Add your registration page screenshot here.

### MongoDB Database

Add a screenshot showing the stored student data here.

---

## 🎯 Project Objective

The objective of this project is to build a basic full-stack application using the MERN Stack and understand how data entered in a React frontend can be sent to a Node.js/Express backend and stored in MongoDB.

---

## 📚 Learning Outcomes

Through this project, I gained practical knowledge of:

* React.js
* Node.js
* Express.js
* MongoDB
* REST API
* Axios
* CRUD fundamentals
* Form handling
* Backend and frontend integration
* Database connectivity
* Git & GitHub

---

## 👨‍💻 Author

**Prasanna**

GitHub:
https://github.com/Prasanna-20740

---

## ⭐ Project

If you find this project useful, feel free to ⭐ the repository.

---

## 📌 License

This project was created for **learning and portfolio purposes**.
