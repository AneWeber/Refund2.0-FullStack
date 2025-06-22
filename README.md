# Refund Project 2.0
Refund 2.0 is a full-stack application developed during a fullstack development course, aimed at managing expense reimbursement requests.
The backend API was provided as part of the course material, while the frontend and the full integration with the API were developed by me.
This version uses modern technologies and follows clean architecture principles to ensure clarity, scalability, and maintainability.

## 🛠️ Tech Stack
### Frontend
- React + TypeScript
- Vite for fast development
- Tailwind CSS for styling
### Backend (provided)
- Node.js + TypeScript
- Express for routing
- Prisma (ORM)
- Bcrypt for secure password hashing
- JWT for authentication
- Multer for handling form-data uploads
- Zod for request validation

## 👥 User Roles
There are two types of users:
- Employee: Can log in and submit expense requests.
- Manager: Can view a list and summary of all employee expenses.

## 🚀 Features
- ✅ User authentication and authorization
- 📝 Create expense entries with:
  - Title
  - Category
  - Amount
  - File upload (e.g. receipts)
- 🗑️ Delete expenses
- 📊 Dashboard with:
  - Total amount summary
  - List of all submitted expenses