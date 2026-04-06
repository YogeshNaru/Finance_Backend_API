# 🚀 Finance Backend API

## 📌 Overview
Finance Backend API is a scalable backend system for a finance dashboard application. It provides secure authentication, role-based access control (RBAC), financial data management, and analytics using MongoDB aggregation pipelines.

This project is designed to demonstrate real-world backend engineering practices including clean architecture, modular design, validation, centralized error handling, and API documentation.

---

## 🌐 Live API Documentation URL
- Swagger Docs:
- 🔗 App: []

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication
- Password hashing using bcrypt
- Protected routes using middleware

### 🛡️ Role-Based Access Control (RBAC)
- **Viewer** → Read-only access
- **Analyst** → View records + analytics
- **Admin** → Full access (CRUD + user management)

### 💰 Financial Records Management
- Create, update, delete financial records
- Filter records by:
  - Type (income / expense)
  - Category
  - Date range
- Pagination support

### 📊 Dashboard Analytics
- Total income
- Total expenses
- Net balance
- Category-wise summary
- Monthly trends (using MongoDB aggregation)

### ✅ Validation & Error Handling
- Request validation using express-validator
- Centralized error handling middleware

### 📦 API Documentation
- Swagger UI for interactive API documentation


---

## 🏗️ Project Structure
- src/
- │── controllers/
- │── routes/
- │── models/
- │── middleware/
- │── validators/
- │── config/
- │── app.js
- │── server.js


---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (Authentication)
- bcrypt (Password hashing)
- express-validator
- Swagger (API Documentation)

---

## 🔐 Authentication Flow

1. User registers with email and password  
2. Password is hashed using bcrypt  
3. User logs in → JWT token generated  
4. Token is used to access protected routes  

---

## 🛡️ Access Control Logic

| Role     | Permissions |
|----------|------------|
| Viewer   | Read-only some records |
| Analyst  | View records + analytics |
| Admin    | Full CRUD + user management |

---

## 📡 API Endpoints

### 🔹 Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### 🔹 Records
- POST `/api/records` (Admin only)
- GET `/api/records` (Analyst/Admin/viewer)
- PATCH `/api/records/:id` (Admin only)
- DELETE `/api/records/:id` (Admin only)

### 🔹 Dashboard
- GET `/api/dashboard/summary` (Analyst/Admin)
- GET `/api/dashboard/category` (Analyst/Admin)
- GET `/api/dashboard/monthly` (Analyst/Admin)


---

### 🛠️ Setup Instructions

### 1. Clone Repository
- git clone https://github.com/your-username/wealthflow-api.git
cd wealthflow-api

### 2. Install Dependencies
- npm install

### 3. Create .env File
- PORT=8000
- MONGO_URI=your_mongodb_uri
- JWT_SECRET=your_secret_key

### 4. Run Server

- npm run dev



## 📸 Screenshots

<img width="1470" height="834" alt="Screenshot 2026-04-06 at 6 55 39 PM" src="https://github.com/user-attachments/assets/579dba16-2703-4b9d-85e5-4d7120cc9a75" />
<img width="1470" height="922" alt="Screenshot 2026-04-06 at 12 50 21 PM" src="https://github.com/user-attachments/assets/37f5277d-a954-4f3e-bca4-8897b2081ea8" />

---

## 👨‍💻 Author

**Yogesh Naru**  
 

---

## ⭐ Note

This project was built as part of a backend engineering assessment.
The focus is on clean architecture, scalability, and real-world backend practices rather than unnecessary complexity.




