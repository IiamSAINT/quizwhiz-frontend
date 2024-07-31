const URL = "https://quizwhiz-backend.onrender.com/api/v1/";

export async function validateLogin(input: object) {
	const res = await fetch(`${URL}auth/login`, {
		method: "POST",
		body: JSON.stringify(input),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	return data;
}

export async function validateSignup(input: object) {
	const res = await fetch(`${URL}auth/signup`, {
		method: "POST",
		body: JSON.stringify(input),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	return data;
}
