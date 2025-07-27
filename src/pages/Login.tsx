import { useState } from "react";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Link } from "react-router-dom";
import { Brain } from "@/common/components/icons/Brain";
import { MdAlternateEmail, MdPerson } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen bg-slate-300 py-10 sm:py-12 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="max-w-xs sm:max-w-md md:max-w-6xl mx-auto transform scale-[1.1] sm:scale-100 transition-transform duration-300">
          <div className="bg-white backdrop-blur-md rounded-xl shadow-md overflow-hidden w-full">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
              {/* Form Section */}
              <div className="p-6 sm:p-8 md:p-12 max-w-xs sm:max-w-sm md:max-w-lg mx-auto w-full">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 text-black">
                    Welcome back
                  </h1>
                  <p className="text-gray-400 text-sm sm:text-xs md:text-[.8rem]">
                    Log in to continue your quiz journey and access your saved quizzes!
                  </p>
                </div>

                {/* FORM */}
                <form className="space-y-5 sm:space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2 h-10 group">
                    <div className="relative h-full transition-all duration-300">
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300
                         "text-green-500 scale-110" : "text-black/20"}
                          group-hover:text-blue-500 group-hover:scale-110 group-focus-within:text-blue-500 group-focus-within:scale-110`}
                      >
                        <MdPerson />
                      </span>
                      <input
                        id="email"
                        type="email"
                       
                        
                        placeholder="Enter your email"
                        className="w-full h-full bg-transparent border-none pl-8 text-black placeholder-black/30 focus:outline-none text-sm placeholder:text-xs placeholder:font-bold"
                      />
                      <span
                        className={`block w-full h-[1px] absolute bottom-0 left-0 rounded-lg transition-all duration-500
    bg-black/10 group-hover:h-[1.5px] group-hover:bg-blue-400 group-hover:shadow-md group-focus-within:bg-blue-500 group-focus-within:h-[2px] group-focus-within:shadow-lg
  `}
                      ></span>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1 group">
                    <div className="relative h-10 transition-all duration-300">
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-black/20 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110 group-focus-within:text-blue-500 group-focus-within:scale-110"
                      >
                        <FaShieldAlt />
                      </span>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full h-full bg-transparent border-none pl-8 pr-8 text-black placeholder-black/30 focus:outline-none text-sm placeholder:text-xs placeholder:font-bold"
                      />
                      <span
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-black/20 cursor-pointer transition-all duration-300 group-hover:text-blue-500 group-focus-within:text-blue-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                      <span className="block w-full h-[1px] bg-black/10 absolute bottom-0 left-0 transition-all duration-500 group-hover:h-[2px] group-hover:bg-blue-400 group-hover:shadow-md group-focus-within:bg-blue-500 group-focus-within:h-[2px] rounded-lg group-focus-within:shadow-lg"></span>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                      <Link
                        to="/forgot-password"
                        className="text-xs sm:text-xs text-gray-400 font-semibold hover:underline hover:scale-95 transition-all ease-in duration-300"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  {/* Login Button */}
                  <Button
                    className={`group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
    hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-base py-3
    shadow-lg hover:shadow-xl transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
    active:scale-95
    `}
                  >
                    <RiLoginCircleLine className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    <span className="tracking-wide">Sign In</span>
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative mb-5 mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-uiGray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-[.8rem]">
                    <span className="px-2 bg-white text-uiGray-500 rounded-2xl">
                      or continue with Gmail
                    </span>
                  </div>
                </div>

                {/* Google Sign-in Button */}
                <div className="mb-6 mt-5">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 h-10 sm:h-12 border-uiGray-300 hover:bg-uiZinc-100 hover:shadow-md transition-all hover:-translate-y-[2px] rounded-[20px] shadow-sm"
                  >
                    <FcGoogle className="h-4 w-4 animate-bounce" />
                    <span className="text-xs sm:text-[.8rem]">Continue with Gmail</span>
                  </Button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-6 sm:mt-8 text-center">
                  <p className="text-uiGray-600 text-xs sm:text-[.9rem]">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-quiz-primary hover:underline font-semibold">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="hidden md:block bg-slate-800 relative overflow-hidden rounded-r-xl">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center animate-pulse">
                        <Brain className="h-16 w-16 text-quiz-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white/90 mb-3">Challenge Your Mind</h3>
                    <p className="text-white/80 shadow-sm max-w-md">
                      Log back in to continue testing your knowledge and competing with friends.
                    </p>
                    {/* Floating decorations */}
                    <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* End Right side */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
