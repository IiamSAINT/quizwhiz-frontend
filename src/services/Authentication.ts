import { URL } from "../variables";

export async function validateLogin(email: string, password: string) {
  try {
    const object = { email, password };

    const res = await fetch(`${URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) throw new Error("An Error occured while singing you in.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(
      `${err || "Network Error. Please Connect to the internet"}`,
    );
  }
}

export async function validateSignup(
  name: string,
  email: string,
  password: string,
) {
  try {
    const object = { name, email, password };
    const res = await fetch(`${URL}auth/signup`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Network Error. Please Connect to the internet.");
  }
}

export const checkAuthStatus = async () => {
  const response = await fetch(`${URL}auth/check`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();
  if (data.status === "success") return { user: data.data };
  if (data.status !== "success") return false;

  return response.ok;
};
