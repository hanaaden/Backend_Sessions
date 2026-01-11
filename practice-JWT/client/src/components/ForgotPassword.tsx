    

function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col justify-center w-full max-w-md  mt-32 h-full border-4 border-blue-300 p-6">
  <h1 className="text-blue-400 text-center">Forgot password</h1>
  
  <label className="mt-12 text-2xl">Email:</label>
  <input type="email" className="w-full sm:w-96 w-96 mt-6 h-12 rounded-full border-2 border-blue-300 p-4 " placeholder="email"/>
  
  <button className="mt-6 bg-blue-500 font-extrabold">reset password </button>
</div>
    </>
  )
}

export default ForgotPassword