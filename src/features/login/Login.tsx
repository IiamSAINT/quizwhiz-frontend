function Login() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[70%] md:w-[50%]">
          <h1 className="text-center font-bold text-4xl mb-10">Login</h1>
          <form action="" className="">
            <div className="mb-5">
              <label htmlFor="username" className=" block mb-2 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="username" className=" block mb-2 font-semibold">
                Password
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
              />
            </div>
            <div>
              <input type="button" value="Submit" className="bg-blue-600 block w-full py-2 text-white rounded" />
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-blue-700">
      
      </div>
    </div>
  );
}

export default Login;
