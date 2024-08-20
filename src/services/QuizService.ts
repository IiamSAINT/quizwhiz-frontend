// const URL = "https://quizwhiz-backend.onrender.com/api/v1/";
const URL = "http://localhost:3000/api/v1/";

export async function createLoby(quizId: string, token: string) {
  const res = await fetch(`${URL}quiz/${quizId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
}

export async function createQuiz(title: string, description: string) {
  try {
    const object = JSON.stringify({ name: title, description });
    console.log(object);
    const res = await fetch(`${URL}quiz`, {
      method: "POST",
      body: object,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log(res);

    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    throw new Error("Network Error. Please Connect to the internet.");
  }
}
