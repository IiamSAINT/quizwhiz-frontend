import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

interface initialValueType {
	user: object;
	isAuthenticated: boolean;
	isLoading: boolean;
	dispatch: Dispatch<unknown>;
}
const initialValue = {
	user: {},
	isAuthenticated: false,
	isLoading: false,
} as initialValueType;

const AuthContext = createContext(initialValue);

const reducer = function (state = initialValue, action) {
	switch (action.type) {
		case "auth/login":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				isLoading: false,
			};

		case "auth/logout":
			return { ...state, user: {}, isAuthenticated: false };
		case "auth/loading":
			return { ...state, isLoading: true };

		default:
			throw new Error("Unknown dispatch action type.");
	}
};

const AuthProvider = function (props: PropsWithChildren) {
	const [{ isAuthenticated, user, isLoading }, dispatch] = useReducer(
		reducer,
		initialValue
	);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, user, dispatch, isLoading }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

const useAuth = function () {
	const context = useContext(AuthContext);

	if (context === undefined)
		throw new Error("AuthContext was used outside the auth provider");

	return context;
};

export default AuthProvider;
export { useAuth };
