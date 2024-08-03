// const URL = "https://quizwhiz-backend.onrender.com/api/v1/";
const URL = "http://localhost:3000/api/v1/";

export async function validateLogin(email: string, password: string) {
	try {
		const object = { email, password };
		console.log(email, password);

		const res = await fetch(`${URL}auth/login`, {
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
		throw new Error("Network Error. Please Connect to the internet");
	}
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
