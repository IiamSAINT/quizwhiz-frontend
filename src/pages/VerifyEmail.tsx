import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { verifyEmail, resendEmailVerificationCode } from '@/features/auth/api';
import { useAuth } from '@/features/auth/useAuth';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/common/components/ui/form';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/common/components/ui/input-otp';
import { Button } from '@/common/components/ui/button';

const FormSchema = z.object({
  pin: z.string().min(6, { message: 'OTP must be 6 characters long' }),
});

const VerifyEmail = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [remainingTime, setRemainingTime] = useState(30);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: '' },
  });

  const verifyMutation = useMutation({
    mutationFn: (data: z.infer<typeof FormSchema>) => verifyEmail(data.pin),
    onSuccess: () => {
      toast.success('Email verified successfully');
      navigate('/feed');
    },
    onError: () => {
      toast.error('Invalid verification code');
    },
  });

  const resendMutation = useMutation({
    mutationFn: resendEmailVerificationCode,
    onSuccess: () => {
      toast.success('Verification code resent');
    },
    onError: () => {
      toast.error('Failed to resend code');
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    verifyMutation.mutate(data);
  };

  const resendCode = () => {
    if (remainingTime === 0) {
      resendMutation.mutate();
      setRemainingTime(30);
    }
  };

  useEffect(() => {
    if (remainingTime <= 0) return;
    const timer = setTimeout(() => setRemainingTime((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [remainingTime]);

  return (
    <div className='h-96 flex flex-col items-center justify-center gap-4'>
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
                    Sent to your email{' '}
                    <span className='underline'>{user?.email ?? '[email not available]'}</span>
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
          <Button type='submit' disabled={verifyMutation.isPending}>
            {verifyMutation.isPending ? 'Verifying...' : 'Submit'}
          </Button>
        </form>
      </Form>

      <Button
        onClick={resendCode}
        disabled={remainingTime > 0 || resendMutation.isPending}
        variant='ghost'
      >
        {remainingTime > 0 ? `Resend code in ${remainingTime}s` : 'Resend code'}
      </Button>
    </div>
  );
};

export default VerifyEmail;
