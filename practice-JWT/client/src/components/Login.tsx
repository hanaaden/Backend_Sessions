import { Link } from "react-router-dom"


function Login() {
  return (
    <>
    
   <div className="flex flex-col justify-center w-full max-w-md  mt-32 h-full border-4 border-blue-300 p-6">
  <h1 className="text-blue-400 text-center">Login Username</h1>
  <label className="mt-6 text-2xl">Username:</label>
  <input type="text" className="w-full sm:w-96 w-96 mt-6 h-12 rounded-full border-2 border-blue-300 p-4 " placeholder="username"/>
  <label className="mt-6 text-2xl">Email:</label>
  <input type="email" className="w-full sm:w-96 w-96 mt-6 h-12 rounded-full border-2 border-blue-300 p-4 " placeholder="email"/>
  <label className="mt-6 text-2xl">password:</label>
  <input type="password" className="w-full sm:w-96 w-96 mt-6 h-12 rounded-full border-2 border-blue-300 p-4 " placeholder="password"/>
   <Link to={"/forgotpassword"} className="p-4 text-center">forgot password</Link>
  <button className="mt-6 bg-blue-500 font-extrabold">Login</button>
</div>


    </>
  )
}

export default Login