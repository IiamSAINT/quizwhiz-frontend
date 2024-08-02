import { ActionFunctionArgs, redirect } from "react-router-dom";
import { validateLogin } from "../../../services/Authentication";

const action = async (obj: ActionFunctionArgs) => {
	const request = obj.request;
	const formData = await request.formData();
	let { email, password } = Object.fromEntries(formData);
	email = email + "";
	password = password + "";
	const data = await validateLogin(email, password);

	return redirect("/app");
	return null;
};

export default action;
