import axiosInstance from '@/common/api/axiosInstance';
import { LoginWithEmailParams, SignUpWithEmailParams } from './types';

let isRefreshing = false;

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshing &&
      !originalRequest.url.includes('auth/refresh')
    ) {
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axiosInstance.get('/auth/refresh', { withCredentials: true });
        const newAccessToken = res.data.accessToken;

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        isRefreshing = false;
        return axiosInstance(originalRequest);
      } catch (refreshErr) {
        isRefreshing = false;
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);

export async function signUpWithEmail(userDetails: SignUpWithEmailParams) {
  const { data } = await axiosInstance.post('auth/signup', userDetails);
  return data;
}

export async function loginWithEmail(userDetails: LoginWithEmailParams) {
  const { data } = await axiosInstance.post('auth/login', userDetails);
  return data;
}

export async function verifyEmail(verificationCode: string) {
  const { data } = await axiosInstance.get(`auth/verify_email?code=${verificationCode}`);
  return data;
}

export async function resendEmailVerificationCode() {
  const { data } = await axiosInstance.get('auth/resend-verification');
  return data;
}

export async function checkAuthStatus() {
  const { data } = await axiosInstance.get('auth/check', {
    withCredentials: true,
  });
  return data;
}
