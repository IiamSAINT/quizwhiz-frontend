import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/features/auth/useAuth';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useState, useEffect, useRef } from 'react';
import { FaRegEye, FaRegEyeSlash, FaUser, FaLock } from 'react-icons/fa6';
import { MdAlternateEmail, MdMarkEmailRead, MdErrorOutline } from 'react-icons/md';
import { FaShieldAlt } from 'react-icons/fa';
import { RiUser3Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { signUpWithEmail } from '../api';
import { LoginResponse, SignUpWithEmailParams } from '../types';
import axiosInstance from '@/common/api/axiosInstance';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { MdVerified } from "react-icons/md";

const getPasswordStrength = (password: string) => {
  if (!password) return { score: 0, label: 'Bad', color: 'bg-red-500' };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 1) return { score, label: 'Bad', color: 'bg-red-500' };
  if (score === 2 || score === 3) return { score, label: 'Fair', color: 'bg-yellow-400' };
  return { score, label: 'Excellent', color: 'bg-green-500' };
};

const SignupForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const passwordStrength = getPasswordStrength(password);

  const mutation = useMutation({
    mutationFn: signUpWithEmail,
    onSuccess: (data: LoginResponse) => {
      const { accessToken, user } = data;

      if (accessToken && user) {
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        setUser(user);
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
    if (
      err.response?.data &&
      typeof err.response.data === 'object' &&
      'message' in err.response.data
    ) {
      toast.error((err.response.data as { message: string }).message);
    } else if (err.request) {
      toast.error("We couldn't reach the server. Check your connection.");
    } else {
      toast.error('Something went wrong. Please try again later.');
    }
  }

  // Alert immediately when a space is typed in the email field, but only once per change
  const emailSpaceAlerted = useRef(false);

  useEffect(() => {
    const email = watch('email');
    if (email && email.includes(' ')) {
      if (!emailSpaceAlerted.current) {
        toast.error('Email cannot contain spaces.');
        emailSpaceAlerted.current = true;
      }
    } else {
      emailSpaceAlerted.current = false;
    }
  }, [watch('email')]);

  return (
    <div className='p-8 md:p-12 lg:p-16 font-poppins'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-3'>Create an account</h1>
        <p className='text-gray-400 text-sm'>
          Join thousands of quiz enthusiasts and start creating interactive quizzes today!
        </p>
      </div>

      <div className='relative mb-8'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>or continue with email</span>
        </div>
      </div>

      <form className='space-y-7' onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className='space-y-2 h-12 group'>
          <div className='relative h-full transition-all duration-300'>
            <span className='absolute left-0 top-1/2 -translate-y-1/2 text-black/20 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110 group-focus-within:text-indigo-500 group-focus-within:scale-110'>
             <RiUser3Line />
            </span>
            <input
              id='name'
              type='text'
              placeholder='Full Name'
              className='w-full placeholder:text-xs placeholder:font-bold h-full bg-transparent border-none pl-9 text-black placeholder-black/30 focus:outline-none text-base font-medium'
              disabled={isLoading}
              {...register('name', { required: 'This field is required' })}
            />
            <span className='block w-full h-[2px] absolute bottom-0 left-0 rounded-lg transition-all duration-500 bg-[#e0e7ff] group-hover:bg-indigo-400 group-hover:shadow-md group-focus-within:bg-indigo-500 group-focus-within:shadow-lg'></span>
          </div>
        </div>

        {/* Email */}
        <div className='space-y-2 h-12 group'>
          <div className='relative h-full transition-all duration-300'>
            <span className='absolute left-0 top-1/2 -translate-y-1/2 text-black/20 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110 group-focus-within:text-indigo-500 group-focus-within:scale-110'>
              <SiGmail />
            </span>
            <input
              id='email'
              type='email'
              placeholder='Email address'
              className='w-full h-full bg-transparent border-none pl-9 pr-9 text-black placeholder-black/30 focus:outline-none text-base font-medium placeholder:text-xs placeholder:font-bold'
              disabled={isLoading}
              {...register('email', { required: 'This field is required' })}
            />
            {/* Mark icon appears if email contains "@" or space */}
            {watch('email')?.includes(' ') ? (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                <MdErrorOutline size={22} />
              </span>
            ) : watch('email')?.includes('@') ? (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                <IoMdCheckmarkCircleOutline size={22} />
              </span>
            ) : null}
            <span className='block w-full h-[2px] absolute bottom-0 left-0 rounded-lg transition-all duration-500 bg-[#e0e7ff] group-hover:bg-indigo-400 group-hover:shadow-md group-focus-within:bg-indigo-500 group-focus-within:shadow-lg'></span>
          </div>
        </div>

        {/* Password */}
        <div className='space-y-2 h-12 group'>
          <div className='relative h-full transition-all duration-300'>
            <span className='absolute left-0 top-1/2 -translate-y-1/2 text-black/20 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110 group-focus-within:text-indigo-500 group-focus-within:scale-110'>
              <FaShieldAlt />
            </span>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full h-full bg-transparent border-none pl-9 pr-9 text-black placeholder-black/30 focus:outline-none text-base font-medium placeholder:text-xs placeholder:font-bold'
              disabled={isLoading}
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <span
              className='absolute right-3 top-1/2 -translate-y-1/2 text-black/30 cursor-pointer transition-all duration-300 hover:text-indigo-500'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </span>
            {(passwordFocused || password) ? (
              <span
                className='block w-full absolute bottom-0 left-0 rounded-lg transition-all duration-500'
                style={{
                  height: '3px',
                  background: `linear-gradient(to right, ${
                    passwordStrength.label === 'Bad'
                      ? '#ef4444 33%, #e5e7eb 33%'
                      : passwordStrength.label === 'Fair'
                      ? '#facc15 66%, #e5e7eb 66%'
                      : '#22c55e 100%'
                  })`,
                  width: '100%',
                }}
              ></span>
            ) : (
              <span className='block w-full h-[2px] absolute bottom-0 left-0 rounded-lg bg-[#e0e7ff]'></span>
            )}
          </div>
          <div className='text-xs mt-1 font-semibold' style={{ color: passwordStrength.color.replace('bg-', '') }}>
            {passwordStrength.label} password
          </div>
    
          
        </div>
              {/* Password Checklist */}
          <div className="mt-2 space-y-1 text-sm relative">
            {/* At least 9 characters */}
            <div className="flex items-center gap-2">
              <MdVerified
                size={18}
                className={password && password.length >= 9 ? "text-blue-500" : "text-gray-400"}
              />
              <span className={password && password.length >= 9 ? "text-blue-600 font-medium" : "text-gray-500"}>
                Password must be at least 9 characters
              </span>
            </div>
            {/* Lowercase and Uppercase */}
            <div className="flex items-center gap-2">
              <MdVerified
                size={18}
                className={password && /[a-z]/.test(password) && /[A-Z]/.test(password) ? "text-blue-500" : "text-gray-400"}
              />
              <span className={password && /[a-z]/.test(password) && /[A-Z]/.test(password) ? "text-blue-600 font-medium" : "text-gray-500"}>
                Lowercase [a-z] and Uppercase [A-Z]
              </span>
            </div>
            {/* Symbol and Number */}
            <div className="flex items-center gap-2">
              <MdVerified
                size={18}
                className={password && /[^A-Za-z0-9]/.test(password) && /[0-9]/.test(password) ? "text-blue-500" : "text-gray-400"}
              />
              <span className={password && /[^A-Za-z0-9]/.test(password) && /[0-9]/.test(password) ? "text-blue-600 font-medium" : "text-gray-500"}>
                Contain a Symbol[!-&] Number [1-9]
              </span>
            </div>
          </div>
          
              {/* Confirm Password */}
        <div className='space-y-2 h-12 group'>
          <div className='relative h-full transition-all duration-300'>
            <span className='absolute left-0 top-1/2 -translate-y-1/2 text-black/20 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110 group-focus-within:text-indigo-500 group-focus-within:scale-110'>
              <FaLock />
            </span>
            <input
              id='confirm-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm your password'
              className={`w-full h-full bg-transparent border-none pl-9 pr-9 text-black placeholder-black/30 focus:outline-none text-base font-medium placeholder:text-sm placeholder:text-bold ${
                errors.confirmPassword ? 'border border-red-500' : ''
              }`}
              disabled={isLoading}
              {...register('confirmPassword', {
                required: 'This field is required',
                validate: (value) => value === password || 'Passwords do not match',
              })}
              onFocus={() => setConfirmFocused(true)}
              onBlur={() => setConfirmFocused(false)}
            />
            <span
              className='absolute right-3 top-1/2 -translate-y-1/2 text-black/30 cursor-pointer transition-all duration-300 hover:text-indigo-500'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </span>
            {(confirmFocused || confirmPassword) ? (
              <span
                className='block w-full absolute bottom-0 left-0 rounded-lg transition-all duration-500'
                style={{
                  height: '3px',
                  background: `linear-gradient(to right, ${
                    confirmPassword && confirmPassword === password
                      ? passwordStrength.label === 'Bad'
                        ? '#ef4444 33%, #e5e7eb 33%'
                        : passwordStrength.label === 'Fair'
                        ? '#facc15 66%, #e5e7eb 66%'
                        : '#22c55e 100%'
                      : '#ef4444 33%, #e5e7eb 33%'
                  })`,
                  width: '100%',
                }}
              ></span>
            ) : (
              <span className='block w-full h-[2px] absolute bottom-0 left-0 rounded-lg bg-[#e0e7ff]'></span>
            )}
          </div>
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>{String(errors.confirmPassword.message)}</p>
          )}
        </div>
  

        {/* Submit Button */}
        <Button
          type='submit'
          className={`group w-full flex items-center justify-center gap-2 rounded-xl bg-blue-700
            hover:from-pink-600 hover:bg-blue-500 text-white font-bold text-base py-3
            shadow-lg hover:shadow-xl transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
            active:scale-95 tracking-wide ${isLoading ? 'cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <Loader className='animate-spin' size={20} />
              Creating Account
            </div>
          ) : (
            'Create Account'
          )}
        </Button>

        {/* Continue with Google button */}
        <Button
          type='button'
          variant='outline'
          className='w-full flex items-center justify-center gap-2 h-12 border-gray-300 hover:bg-gray-50 mt-4'
          disabled={isLoading}
        >
          <FcGoogle className='h-5 w-5' />
          <span>Continue with Google</span>
        </Button>
      </form>

      <div className='mt-8 text-center'>
        <p className='text-gray-600'>
          Already have an account?{' '}
          <Link to='/auth/login' className='text-quiz-primary hover:underline font-medium'>
            Log in
          </Link>
          <Link to='/auth/verify-email' className='ml-2 text-quiz-primary hover:underline font-medium'>
            Verify Email
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
