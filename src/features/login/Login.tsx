import { FormEvent, useState } from "react";
import RegBanner from "../../ui/RegBanner";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[70%] lg:w-[50%] ">
          <h1 className="text-center font-semibold text-6xl mb-10 font-cabinSketch">
            Welcome Back
          </h1>
          <form action="POST" className="font-oxygen" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="username" className=" block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="username"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className=" block mb-2 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="bg-blue-600 block w-full py-2 text-white rounded">Login</button>
            </div>
          </form>
          <div className="text-center mt-5">
            <h3>Already have an account?</h3>
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <RegBanner />
    </div>
  );
}

export default Login;
