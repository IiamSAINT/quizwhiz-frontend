import { ActionFunctionArgs, redirect } from "react-router-dom";
import { validateLogin } from "../../services/Authentication";

const action = async (obj: ActionFunctionArgs) => {
	const request = obj.request;
	const formData = await request.formData();
	let { email, password } = Object.fromEntries(formData);
	email = email + "";
	password = password + "";
	const data = await validateLogin(email, password);
    // TODO
    // Save USer Data in Global Context when Created

	return redirect("/app");
};

export default action;
