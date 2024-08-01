import { useEffect, useState } from "react";
import { checkAuthStatus } from "../services/Authentication";

const useIsLoggedIn = function () {
	const [isLoggedIn, setIsLoggedIn] = useState<string | boolean>("loading");

	const checkIsLoggedIn = async () => {
		setIsLoggedIn(await checkAuthStatus());
	};

	useEffect(() => {
		checkIsLoggedIn();
	}, []);

	return isLoggedIn;
};

export default useIsLoggedIn;
