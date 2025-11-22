# User Authentication – Signup & Signin (Express + TypeScript)

In this branch, I am building user authentication using Express, TypeScript, PostgreSQL, and Bcrypt.
Here you will learn how signup and signin works in a real backend system.

### What this branch covers

- How to create users in the database

- How to hash passwords using bcryptjs

- How to compare passwords when user tries to login

- How to connect Express with PostgreSQL

- How to structure auth routes in TypeScript

- Basic error handling for missing fields

- Returning clean responses for success and fail

### Tech Stack

- Node.js + Express

- TypeScript

- PostgreSQL

- bcryptjs for hashing

- pg for database connection

Routes in this branch
POST /signup

Creates a new user in the database.

Hashes the password

Stores username, email, password

Returns success message

POST /login

Checks if the user exists and verifies the password.

Compares the hashed password

Returns success or fail message