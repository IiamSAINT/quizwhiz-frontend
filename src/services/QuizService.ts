const URL = "https://quizwhiz-backend.onrender.com/api/v1/";

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
