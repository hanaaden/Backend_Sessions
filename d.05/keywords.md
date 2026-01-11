## What is JWT + httpCookie?

JWT means JSON Web Token.
It is like a small ID that the backend gives you when you log in.
The backend creates the JWT and sends it to the frontend.
The frontend keeps the JWT inside an http-only cookie.

An http cookie is a small data that the browser saves.
Every time you make a request, the cookie goes with the request.
So the backend reads the cookie, checks the JWT inside it, and knows who you are.

JWT + httpCookie together is a login system.
It means the website will log you in, give you the token, store it in a cookie, and then you stay logged in.

## What is OAuth?

OAuth is another login method.
It is when you log in with Google, GitHub, Facebook, and other big apps.
You do not write your email and password in your website.
Instead, you click “Login with Google.”
Google checks you are real, and then Google tells your backend “yes, this user is correct.”

Your website trusts Google.

So OAuth is login using another trusted company.

## which db is prefereed for chat apps?

NoSQL is usually better for chat apps. Why?

Chat messages are:

- fast

- continuous

- high-volume

- often unstructured

