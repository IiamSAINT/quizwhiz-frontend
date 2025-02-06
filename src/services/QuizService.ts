// import { URL } from "../variables";

// export async function createLoby(quizId: string, token: string) {
//   const res = await fetch(`${URL}quiz/${quizId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await res.json();
//   return data;
// }

// export async function createQuiz(title: string, description: string) {
//   try {
//     const object = JSON.stringify({ name: title, description });
//     console.log(object);
//     const res = await fetch(`${URL}quiz`, {
//       method: "POST",
//       body: object,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     if (!res.ok) throw new Error("Failed To Fetch");

//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err: any) {
//     throw new Error(err.message);
//   }
// }

// export async function addQuestion(id: string, body) {
//   try {
//     const res = await fetch(`${URL}quiz/${id}/question`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//       credentials: "include",
//     });

//     console.log(res);
//     if (!res.ok) throw new Error("Failed To Fetch");

//     const data = await res.json();
//     console.log(data);

//     return data;
//   } catch (err: any) {
//     console.log(err);
//     throw new Error(err);
//   }
// }
