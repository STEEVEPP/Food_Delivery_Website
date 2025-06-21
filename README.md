# 🍔 Food Delivery Website (MERN Stack)

A full-featured Food Delivery Web Application built using the MERN stack, divided into three modules:

- **Frontend** – Customer interface
- **Admin** – Admin dashboard
- **Backend** – REST API with authentication, order handling, and database connection

---

## 📦 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | React, Tailwind CSS, Axios    |
| Admin Panel  | React, Tailwind CSS, Axios    |
| Backend      | Node.js, Express.js, MongoDB  |
| Auth & State | JWT, LocalStorage             |

---

## 📁 Folder Structure

Food_Delivery_Website/
│
├── backend/ # Node.js + Express + MongoDB (API server)
├── frontend/ # Customer UI (React)
├── admin/ # Admin Dashboard (React)
└── README.md


---

## 🔧 Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm 
- Git

---

## 🛠️ Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/STEEVEPP/Food_Delivery_Website.git
cd Food_Delivery_Website

# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install

# Admin dashboard dependencies
cd ../admin
npm install

```

🚀 Running the Project

You need 3 terminals (or terminal tabs) open to run all parts simultaneously:

1st Terminal
```Bash
cd backend
npm run server
```

2nd Terminal
```bash
cd frontend
npm run dev
```

3rd Terminal
```bash
cd admin
npm run dev
```
