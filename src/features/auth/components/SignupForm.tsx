import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/features/auth/useAuth";

import { signUpWithEmail, verifyEmail } from "../api";

// todo  validate form (confirm password, password length etc, use red borders, ), loading states and navigate on successfull

const SignupForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const { accessToken, setAccessToken } = useAuth();

  const mutation = useMutation({
    mutationFn: signUpWithEmail,
    onSuccess: (data) => {
      console.log("Success:", data);
      if (data.accessToken) {
        setAccessToken(data.accessToken);
      }
      reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  console.log(accessToken);
  return (
    <div className="p-8 md:p-12 lg:p-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Create an account</h1>
        <p className="text-gray-600">
          Join thousands of quiz enthusiasts and start creating interactive
          quizzes today!
        </p>
      </div>

      {/* Github Sign-in Button */}
      <div className="mb-8">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 h-12 border-gray-300 hover:bg-gray-50"
        >
          <Github className="h-5 w-5 text-gray-700" />
          <span>Continue with Github</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            or continue with email
          </span>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            className="h-12"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="h-12"
            {...register("email", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            className="h-12"
            {...register("password", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            className="h-12"
            {...register("confirm password", {
              required: "This field is required",
            })}
          />
        </div>

        <Button className="w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90 text-white">
          Create Account
        </Button>
      </form>

      {/* Login Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-quiz-primary hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
      <p onClick={() => verifyEmail("985a99", mutation.data.accessToken)}>
        Verify email
      </p>
    </div>
  );
};

export default SignupForm;
