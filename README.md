# Pixisphere-Style Modular Backend System

This project is a role-based modular backend system designed to simulate Pixisphere's backend architecture. It includes secure authentication, multi-role access control, smart lead management, vendor onboarding and verification, and admin-level moderation APIs.

---

## 🚀 Features

### ✅ Core Modules
- **Authentication & Authorization**: JWT-based auth with support for email/password & mocked OTP.
- **Multi-Role System**: Client, Partner, Admin roles with protected access.
- **Partner Onboarding**: Verification workflow with admin approval/rejection.
- **Lead Management**: Smart inquiry submission and matching system.
- **Portfolio Management**: CRUD for partner portfolio entries.
- **Admin Dashboard**: KPIs, moderation, and partner verification.
- **Stats & Reviews**: Mock KPIs and review moderation support.

### 🔧 Tech Stack
- **Node.js + Express**
- **MongoDB (Mongoose)** – for partner, portfolio, inquiry
- **PostgreSQL (Sequelize)** – for admin, categories, locations, KPI
- **JWT for Auth**
- **Rate Limiting + Logging Middleware**

---

## 🏗️ Folder Structure
/backend
├── app.js
├── .env
├── config/
├── controllers/
├── middlewares/
├── models/
│ ├── mongo/
│ └── pg/
├── routes/
├── services/
├── utils/


---

## 🔐 Authentication & Role-Based Access

| Method | Endpoint              | Role    | Description                  |
|--------|-----------------------|---------|------------------------------|
| POST   | `/api/auth/signup`    | All     | Register user by role        |
| POST   | `/api/auth/login`     | All     | Login & return JWT           |
| GET    | `/api/partner/leads`  | Partner | Fetch matched inquiries      |

---

## 📦 Partner Workflow

| Method | Endpoint                         | Role    | Description                            |
|--------|----------------------------------|---------|----------------------------------------|
| POST   | `/api/partner/portfolio`         | Partner | Add portfolio entry                    |
| GET    | `/api/admin/verifications`       | Admin   | View pending partner verifications     |
| PUT    | `/api/admin/verify/:partnerId`   | Admin   | Approve or reject a partner            |

---

## 📬 Inquiry Module

| Method | Endpoint           | Role   | Description                        |
|--------|--------------------|--------|------------------------------------|
| POST   | `/api/inquiry`     | Client | Submit a new service inquiry       |

---

## 📈 Admin KPIs & Moderation

| Method | Endpoint               | Role  | Description                     |
|--------|------------------------|-------|---------------------------------|
| GET    | `/api/admin/stats`      | Admin | View overall system stats       |
| DELETE | `/api/admin/review/:id`| Admin | Remove a review (mock)          |
| CRUD   | `/api/admin/category`  | Admin | Manage service categories       |


---

## 🧪 Setup Instructions

### 🔨 Prerequisites
- Node.js v18+
- MongoDB
- PostgreSQL
- npm or yarn

### ⚙️ Environment Variables

Create a `.env` file in the `/backend` directory:


