const URL = "https://quizwhiz-backend.onrender.com/";

export async function validateLogin(input: object) {
  const res = await fetch(`${URL}api/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data)
  return data;
}

export async function validateSignup(input: object) {
  const res = await fetch(`${URL}api/v1/auth/signup`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data)
  return data;
}
