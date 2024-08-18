/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { validateLogin } from "../../services/Authentication";

const action = async (obj: ActionFunctionArgs) => {
	try {
		const request = obj.request;
		const formData = await request.formData();
		let { email, password } = Object.fromEntries(formData);
		email = email + "";
		password = password + "";
		const data = await validateLogin(email, password);

		if (data.status === "error" || data.status === "fail") return data.message;

		return redirect("/app");
	} catch (err: any) {
		return err.message;
	}
};

export default action;
