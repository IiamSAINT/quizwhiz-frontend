import axiosInstance from '@/common/api/axiosInstance';

export async function signUpWithEmail(userDetails: object) {
  try {
    const { data } = await axiosInstance.post('auth/signup', userDetails);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function verifyEmail(verificationCode: string, token: string) {
  try {
    const data = await axiosInstance.get(`auth/verify_email?code=${verificationCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function loginWithEmail(userDetails: object) {
  try {
    const data = await axiosInstance.post(`auth/login`, userDetails);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function resendEmailVerificationCode(token: string) {
  try {
    const data = await axiosInstance.get(`auth/resend-verification`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
