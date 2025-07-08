import axiosInstance from '@/common/api/axiosInstance';
import { LoginWithEmailParams, SignUpWithEmailParams } from './types';

export async function signUpWithEmail(userDetails: SignUpWithEmailParams) {
  try {
    const { data } = await axiosInstance.post('auth/signup', userDetails);
    return data;
  } catch (err) {
    console.error('SignupWithEmail Error:', err);
    throw err;
  }
}

export async function verifyEmail(verificationCode: string, token: string) {
  try {
    const data = await axiosInstance.get(`auth/verify_email?code=${verificationCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function loginWithEmail(userDetails: LoginWithEmailParams) {
  try {
    const { data } = await axiosInstance.post(`auth/login`, userDetails);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function resendEmailVerificationCode(token: string) {
  try {
    const data = await axiosInstance.get(`auth/resend-verification`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
}
