# Webstack---Portfolio-Project

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)



## Introduction
PCEP is a web application designed to automates and streamlines tasks, optimizing the process of planning, monitoring, and managing school infrastructure. The app aims to reduce the manual workload, enhance data accuracy, and improve the overall efficiency of the service.

This project is built using modern web technologies like React, Node.js, and MySQL to provide a scalable and efficient solution.

## Features
- User Authentication: Secure login and registration system based on roles.
- Dashboard: Role-based dashboards displaying relevant data.
- CRUD Operations: Manage resources like projects and tasks.
- Project Tracking: Visualize the progress of construction projects in real-time.
- Responsive Design: Optimized for desktop and mobile devices.

## Technologies Used
- Front-end: React.js, HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: MySQL
- Others: Axios, JWT for authentication, bcrypt for password hashing, Sequelize ORM

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MySQL (v8+)
- npm (v6+)

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/EnimaOs/Webstack---Portfolio-Project.git
   ```
2. Navigate to the project directory:
   ```
   cd Webstack---Portfolio-Project
   ```
3. Install the dependencies for both the front-end and back-end:
   ```
   npm install
   cd client
   npm install
   ```

4. Set up your MySQL database:
   - Create a MySQL database.
   - Configure the database connection in `.env` file (see the sample below).

5. Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=your_database_name

   ```

6. Run the database migrations:
   ```
   npm run migrate
   ```

7. Start the server and the front-end:
   ```
   npm run dev
   ```

## Usage
1. Once the server is running, you can access the front-end at `http://localhost:3000`.
2. For API testing, you can use `http://localhost:5000/api/` as the base URL.
3. You can log in with the default credentials or create a new account.

## API Endpoints
| Method | Endpoint                       | Description                      |
|--------|--------------------------------|----------------------------------|
| POST   | `/api/auth/login`              | Log in to the application        |
| POST   | `/api/auth/register`           | Register a new user              |
| GET    | `/api/projects`                | Get all projects                 |
| POST   | `/api/projects`                | Create a new project             |
| PUT    | `/api/projects/:id`            | Update a project                 |
| DELETE | `/api/projects/:id`            | Delete a project                 |



## Database Schema
The application uses a MySQL database with the following key tables:
- Users: Stores user data and roles.
- Projects: Stores details of construction projects.
- Phases: Tracks each phase of a project with timestamps.
- Roles: Defines user roles (admin, manager, etc.)....

A full database schema is available in the `docs/pfe.sql` file (if applicable).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or need further assistance, feel free to contact:
- Amine
- Email: amine.bouali11@gmail.com

