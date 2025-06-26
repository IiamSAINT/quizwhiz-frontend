import axios from "axios";
const BASE_URL = "https://quizwhiz-backend-1.onrender.com/api/v1/";

const instance = axios.create({
	baseURL: BASE_URL,
});

export default instance;
