import axios from "axios";
const BASE_URL = "https://quizwhiz-backend-1.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function signUpWithEmail(userDetails: object) {
  try {
    const { data } = await axiosInstance.post(
      "/api/v1/auth/signup",
      userDetails
    );
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function verifyEmail(verificationCode: string, token: string) {
  try {
    const data = await axiosInstance.get(
      `/api/v1/auth/verify_email?code=${verificationCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data)
    return data;
  } catch (err) {
    console.error(err);
  }
}
