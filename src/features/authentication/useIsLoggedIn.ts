import { useCallback, useEffect } from "react";
import { checkAuthStatus } from "../../services/Authentication";
import { useAuth } from "./AuthContext";

const useIsLoggedIn = function () {
	const { isAuthenticated, dispatch } = useAuth();

	const checkIsLoggedIn = useCallback(async () => {
		dispatch({ type: "auth/loading" });
		const user = await checkAuthStatus();
		if (!user) return;
		dispatch({
			type: "auth/login",
			payload: typeof user === "boolean" ? {} : user.user,
		});
	}, [dispatch]);

	useEffect(() => {
		if (isAuthenticated) return;
		checkIsLoggedIn();
	}, [isAuthenticated, checkIsLoggedIn]);

	return null;
};

export default useIsLoggedIn;
