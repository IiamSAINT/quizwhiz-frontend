import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { loginWithEmail } from '../api';
import { LoginResponse, LoginWithEmailParams } from '../types';
import { Button } from '@/common/components/ui/button';
import { useAuth } from '../useAuth';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

const LoginForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const { setAccessToken, setUser } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (data: LoginResponse) => {
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        setUser(data.user);
        toast.success('Login successfully!');
        navigate('/feed');
      }
      reset();
    },
    onError: () => {
      toast.error('Invalid user credentials');
    },
  });

  const isLoading = mutation.isPending;

  function onSubmit(data: LoginWithEmailParams) {
    mutation.mutate(data);
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          className='h-12'
          {...register('email', { required: 'This field is required' })}
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='password'>Password</Label>
          <Link to='/forgot-password' className='text-sm text-quiz-primary hover:underline'>
            Forgot password?
          </Link>
        </div>
        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          className='h-12'
          {...register('password', { required: 'This field is required' })}
        />
      </div>

      <Button
        className={`w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90 text-white ${isLoading && 'cursor-not-allowed'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Signing in' : 'Log In'}
        {isLoading && <Loader className='animate-spin' />}
      </Button>
    </form>
  );
};

export default LoginForm;
