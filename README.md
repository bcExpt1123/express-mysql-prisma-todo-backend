# Todo List App - Backend

This is the backend for the **Todo List App**, built using **Express.js**, **TypeScript**, **Prisma**, and **MySQL**.

## **Features**
- REST API endpoints for managing tasks.
- Database integration with **Prisma** and **MySQL**.

## **Tech Stack**
- **Express.js**
- **TypeScript**
- **Prisma**
- **MySQL**

## **Setup Instructions**

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MySQL** (local or hosted database)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/bcExpt1123/express-mysql-prisma-todo-backend.git
   cd express-mysql-prisma-todo-backend
   ```  

2. Install dependencies:
   ```bash
   npm install
   ```  
   or
   ```bash
   yarn install
   ```  

3. Set up environment variables:  
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database_name>"
   ```  
   Replace the placeholders with your database details.

4. Initialize the database with Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```  

5. Start the server:
   ```bash
   npm run dev
   ```  
   or
   ```bash
   yarn dev
   ```  

   The server will run at [http://localhost:5000](http://localhost:5000).

### **REST API Endpoints**

| Method | Endpoint       | Description                 |  
|--------|----------------|-----------------------------|  
| GET    | `/tasks`       | Retrieve all tasks.         |
| GET    | `/tasks/count` | Retrieve all tasks\' count. |
| GET    | `/tasks/:id`   | Retrieve a task.            |
| POST   | `/tasks`       | Create a new task.          |  
| PUT    | `/tasks/:id`   | Update an existing task.    |  
| DELETE | `/tasks/:id`   | Delete a task by ID.        |  

## **Folder Structure**
- `src/` - Source code.
    - `controllers/` - Handles request logic for tasks.
    - `routes/` - API routes for the app.
    - `services/` - Services for handling database.
    - `prisma/` - Prisma schema and migrations.  