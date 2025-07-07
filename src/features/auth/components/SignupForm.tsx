import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/features/auth/useAuth';
import { toast } from 'sonner';

import { signUpWithEmail } from '../api';
import { LoginResponse, SignUpWithEmailParams } from '../types';
import { AxiosError } from 'axios';

const SignupForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setAccessToken, setUser } = useAuth();
  const navigate = useNavigate();
  const password = watch('password');

  const mutation = useMutation({
    mutationFn: signUpWithEmail,
    onSuccess: (data: LoginResponse) => {
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        setUser(data.user);
        toast.success('Account created successfully!');
        navigate('/auth/verify-email');
      }
      reset();
    },
    onError: onError,
  });

  const isLoading = mutation.isPending;

  const onSubmit = (data: SignUpWithEmailParams) => {
    mutation.mutate(data);
  };

  function onError(err: AxiosError) {
    console.log(err.response);
    if (
      err.response &&
      err.response.data &&
      typeof err.response.data === 'object' &&
      'message' in err.response.data
    ) {
      toast.error((err.response.data as { message: string }).message);
      return;
    }

    if (err.request) {
      toast.error("We couldn't reach the server. Please check your connection and try again.");
      return;
    }
    toast.error('Something went wrong please try again later');
  }

  return (
    <div className='p-8 md:p-12 lg:p-16'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-3'>Create an account</h1>
        <p className='text-gray-600'>
          Join thousands of quiz enthusiasts and start creating interactive quizzes today!
        </p>
      </div>

      <div className='mb-8'>
        <Button
          variant='outline'
          className='w-full flex items-center justify-center gap-2 h-12 border-gray-300 hover:bg-gray-50'
          disabled={isLoading}
        >
          <Github className='h-5 w-5 text-gray-700' />
          <span>Continue with Github</span>
        </Button>
      </div>

      <div className='relative mb-8'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>or continue with email</span>
        </div>
      </div>

      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-2'>
          <Label htmlFor='name'>Full Name</Label>
          <Input
            id='name'
            placeholder='Enter your full name'
            className='h-12'
            disabled={isLoading}
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            className='h-12'
            disabled={isLoading}
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            placeholder='Create a password'
            className={`h-12 ${errors.password ? 'border border-red-500' : ''}`}
            disabled={isLoading}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <p className='text-sm text-red-500'>{String(errors.password.message)}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='confirm-password'>Confirm Password</Label>
          <Input
            id='confirm-password'
            type='password'
            placeholder='Confirm your password'
            className={`h-12 ${errors.confirmPassword ? 'border border-red-500' : ''}`}
            disabled={isLoading}
            {...register('confirmPassword', {
              required: 'This field is required',
              validate: (value) => value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>{String(errors.confirmPassword.message)}</p>
          )}
        </div>

        <Button
          type='submit'
          className={`w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90  text-white ${isLoading ? 'cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Acount' : 'Create Account'}
          {isLoading && <Loader className='animate-spin' />}
        </Button>
      </form>

      <div className='mt-8 text-center'>
        <p className='text-gray-600'>
          Already have an account?{' '}
          <Link to='/auth/login' className='text-quiz-primary hover:underline font-medium'>
            Log in
          </Link>
          <Link
            to='/auth/verify-email'
            className='ml-2 text-quiz-primary hover:underline font-medium'
          >
            Verify Email
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
