/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createQuiz } from "../../services/QuizService";

const action = async (obj: ActionFunctionArgs) => {
  try {
    const request = obj.request;
    const formData = await request.formData();
    let { title, description } = Object.fromEntries(formData);
    title = title + "";
    description = description + "";

    const data = await createQuiz(title, description);
    if (data.status === "error" || data.status === "fail") return data.message;

    return redirect(`/app/createquiz/${data.data.id}`);
  } catch (err: any) {
    return err.message;
  }
};

export default action;
