'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/common/components/ui/button';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/ui/form';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/common/components/ui/input-otp';
import { verifyEmail, resendEmailVerificationCode } from '@/features/auth/api';
import { useAuth } from '@/features/auth/useAuth';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

function VerifyEmail() {
  const { accessToken } = useAuth();
  const [remainingTime, setRemainingTime] = useState(30);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    verifyEmail(data.pin, accessToken);
  }

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timerId = setTimeout(() => {
      setRemainingTime((time) => time - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [remainingTime]);

  console.log(remainingTime);

  function resendCode() {
    resendEmailVerificationCode(accessToken);
    setRemainingTime(30);
  }

  return (
    <div className='h-96 flex items-center justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='pin'
            render={({ field }) => (
              <FormItem className='space-y-6'>
                <div>
                  <FormLabel className='text-2xl'>Enter your OTP</FormLabel>
                  <FormDescription className='text-lg'>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                </div>
                <FormControl>
                  <InputOTP pattern={REGEXP_ONLY_DIGITS_AND_CHARS} maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      <button onClick={resendCode} disabled={Boolean(remainingTime)}>
        {remainingTime > 0 ? `Resend code in ${remainingTime}` : 'Resend code'}
      </button>
    </div>
  );
}

export default VerifyEmail;
