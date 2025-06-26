import AuthContext from "@/features/auth/AuthContext";
import { ReactNode, useState } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [accessToken, setAccessToken] = useState<string | null>(null);

	// todo use useReducer

	return (
		<AuthContext.Provider value={{ accessToken, setAccessToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
