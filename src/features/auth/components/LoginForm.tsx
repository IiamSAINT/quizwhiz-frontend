import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { loginWithEmail } from "../api";
import { Button } from "@/common/components/ui/button";

const LoginForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (data) => {
      console.log("Success:", data);
      reset();
    },
  });

  function onSubmit(data: object) {
    mutation.mutate(data);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="h-12"
          {...register("email", { required: "This field is required" })}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            to="/forgot-password"
            className="text-sm text-quiz-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="h-12"
          {...register("password", { required: "This field is required" })}
        />
      </div>

      <Button className="w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90 text-white">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
