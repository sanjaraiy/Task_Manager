# Task Manager Tool #

## ✅ Instructions to Run the Project
### How to Run the Project
This project contains:
`Frontend (Next.js)` → master branch
`Backend (Node.js + Express)` → main branch
Both must be run separately.

### 1️⃣ Run Backend (main branch)
Step 1: Switch to backend branch
```bash
git checkout main
```
Step 2: Navigate to backend folder
```bash
cd backend
```
Step 3: Install dependencies
```bash
npm install
```
Step 4: Start backend server
```bash
npm run dev
```
Server will run at:
```bash
http://localhost:5000
```
Test endpoint:
```bash
http://localhost:5000/tasks
```

### 2️⃣ Run Frontend (master branch)
Open a new terminal.

Step 1: Switch to frontend branch
```bash
git checkout master
```
Step 2: Navigate to frontend folder
```bash
cd frontend
```
Step 3: Install dependencies
```bash
npm install
```
Step 4: Start frontend
```bash
npm run dev
```
Frontend will run at:
```bash
http://localhost:3000
```
Make sure backend is running before using frontend.


## ✅ Short Architecture Explanation
### Architecture Overview
The project follows a simple client-server architecture.
```Backend```
The backend is built using Node.js and Express and follows a layered structure:
- Routes → Define REST API endpoints
- Controllers → Handle request and response logic
- Models → Manage in-memory data storage
- Tests → API tests using Jest and Supertest

Data is stored in an in-memory array as required.

Filtering and searching are implemented using query parameters:
- GET /tasks?search=
- GET /tasks?status=

Proper status codes and JSON responses are returned.

```Frontend```
The frontend is built using Next.js with functional components and React hooks.
Structure includes:
- components → Reusable UI components
- services → API communication logic
- page.tsx → Main UI

State is managed using useState and useEffect.
The frontend communicates with the backend via REST API calls.
Basic loading and error handling are implemented.







