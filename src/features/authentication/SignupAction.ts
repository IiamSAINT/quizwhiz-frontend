import { ActionFunctionArgs, redirect } from "react-router-dom";
import { validateSignup } from "../../services/Authentication";

const action = async function (obj: ActionFunctionArgs) {
	const request = obj.request;
	const formData = await request.formData();
	let { email, password, name } = Object.fromEntries(formData);
	email = email + "";
	password = password + "";
	name = name + "";

	const data = await validateSignup(name, email, password);
	if (data.status === "error" || data.status === "fail") return data.message;
	return redirect("/app");
};

export default action;
