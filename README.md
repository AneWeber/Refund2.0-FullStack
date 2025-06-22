# Refund Project 2.0
Refund 2.0 is a full-stack application developed during a fullstack development course, aimed at managing expense reimbursement requests.
The backend API was provided as part of the course material, while the frontend and the full integration with the API were developed by me.
This version uses modern technologies and follows clean architecture principles to ensure clarity, scalability, and maintainability.

#### demo:


https://github.com/user-attachments/assets/51c39b6f-3ced-46d9-8224-ea94df0a8d86



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
 
  
## How to try

#### terminal 01:
Starts the backend server after installing dependencies and running the database migrations.
- cd .\API\
- npm install
- npx prisma migrate dev
- npm run dev
#
#### terminal 02:
Opens Prisma Studio to visualize and interact with the database.
- cd .\API\
- npx prisma studio 
#
#### terminal 03:
Installs frontend dependencies and starts the development server. Open the provided link in your browser.
- cd .\WEB\
- npm install
- npm run dev
#
#### terminal 04:
Browser testing:
- To access the manager dashboard, log in with:
  - Email: manager@email.com
  - Password: 123456

- To access the employee refund submission form, log in with:
  - Email: user@email.com
  - Password: 123456
