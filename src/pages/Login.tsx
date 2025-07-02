import { useState } from "react";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Brain } from "@/common/components/icons/Brain";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-uiZinc-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-[90%] md:w-[100%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
              {/* Left side - Form */}
              <div className="p-8 md:p-12 lg:p-16 max-w-md md:max-w-lg mx-auto w-full">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-down duration-700 text-quiz-primary">
                    Welcome back
                  </h1>
                  <p className="text-uiGray-500 text-sm md:text-[.8rem] animate-fade-in-up duration-700">
                    Log in to continue your quiz journey and access your saved quizzes!
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <MdAlternateEmail />
                      </span>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-10 pl-10 placeholder:text-[.8rem] rounded-2xl hover:shadow-md focus:bg-uiZinc-100 focus:ring-2 focus:ring-quiz-primary transition-all duration-300 active:scale-95 animate-scale-up hover:bg-uiZinc-100 focus:shadow-md focus:outline-none focus:ring-offset-2 focus:ring-offset-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaFingerprint />
                      </span>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-10 pl-10 pr-10 placeholder:text-[.8rem] rounded-2xl bg-uiZinc-100 focus:ring-2 focus:ring-quiz-primary transition-all duration-300 active:scale-95 animate-scale-up hover:shadow-md hover:bg-uiZinc-100 focus:shadow-md focus:outline-none focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-quiz-primary"
                    >
                      <span className="text-[.8rem] relative font-semibold top-2 right-0 hover:underline hover:scale-95 transition-all ease-in duration-300">
                        Forgot password?
                      </span>
                    </Link>
                  </div>

                  <Button className="w-full h-10 bg-quiz-primary hover:bg-quiz-primary/90 text-white hover:shadow-xl transition-all ease-in hover:scale-105 active:scale-95 animate-scale-up rounded-2xl hover:rounded-3xl">
                    Log In
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative mb-5 mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-uiGray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-[.8rem]">
                    <span className="px-2 bg-white text-uiGray-500 rounded-2xl">
                      or continue with Github
                    </span>
                  </div>
                </div>

                {/* Github Sign-in Button */}
                <div className="mb-6 mt-5">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 h-12 border-uiGray-300 hover:bg-uiZinc-100 hover:shadow-md transition-all hover:-translate-y-[2px] animate-fade-in rounded-[20px]"
                  >
                    <Github className="h-4 w-4 text-uiGray-600" />
                    <span className="text-[.8rem]">Continue with Github</span>
                  </Button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-uiGray-600 text-[.9rem]">
                    Don't have an account?{' '}
                    <Link
                      to="/signup"
                      className="text-quiz-primary hover:underline font-semibold"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="hidden md:block bg-uiSlate-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center animate-pulse">
                        <Brain className="h-16 w-16 text-quiz-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Challenge Your Mind
                    </h3>
                    <p className="text-white shadow-sm max-w-md">
                      Log back in to continue testing your knowledge and competing with friends.
                    </p>

                    {/* Floating elements for decoration */}
                    <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
