Wysa Project
This repository contains the code for the Wysa project, a Node.js and PostgreSQL-based application that manages data using Sequelize as an ORM.

Table of Contents
Introduction
Features
Technologies Used
Setup and Installation
Usage
Contributing
License
Introduction
The Wysa project demonstrates a backend application that connects to a PostgreSQL database, performs CRUD operations, and interacts with various models such as User and Question. It showcases user authentication, table creation, and Sequelize ORM integration.

Features
Sequelize ORM for model-based database interactions
PostgreSQL as the database
API endpoints for user management
Secure password handling using bcrypt
Error handling and table creation
Technologies Used
Node.js
Express.js
PostgreSQL
Sequelize ORM
Bcrypt.js (for password encryption)
Setup and Installation
Prerequisites
Node.js (v14+)
PostgreSQL (v12+)
Git
Steps
Clone this repository:

bash
Copy code
git clone https://github.com/Anshika-sona/wysa.git
cd wysa
Install the necessary dependencies:

bash
Copy code
npm install
Set up the PostgreSQL database:

Create a PostgreSQL user and database.
Update the config/config.json file with your database credentials.
Run the application:

bash
Copy code
node app.js
Usage
Once the application is running, you can interact with the API endpoints to manage users and questions. The API will automatically create the required tables if they do not exist.

Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.


