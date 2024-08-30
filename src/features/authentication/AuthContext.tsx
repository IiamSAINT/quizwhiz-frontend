/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

// Define the User interface
interface User {
	email: string;
	avatar?: string;
	name: string;
}

// Define the state type
interface StateType {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	isError: boolean;
}

// Define the action types
type ActionType =
	| { type: "auth/login"; payload: User }
	| { type: "auth/logout" }
	| { type: "auth/loading" }
	| { type: "auth/error" };

// Define the context value type
interface AuthContextType extends StateType {
	dispatch: Dispatch<ActionType>;
}

// Initialize the default state
const initialValue: StateType = {
	user: null,
	isAuthenticated: false,
	isLoading: false,
	isError: false,
};

// Create the AuthContext with the correct type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the reducer function with the correct type
const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case "auth/login":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				isLoading: false,
				isError: false,
			};
		case "auth/logout":
			return {
				...state,
				user: null,
				isAuthenticated: false,
				isLoading: false,
				isError: false,
			};
		case "auth/loading":
			return { ...state, isLoading: true, isError: false };
		case "auth/error":
			return { ...state, isError: true, isLoading: false };
		default:
			throw new Error("Unknown dispatch action type.");
	}
};

// AuthProvider component with PropsWithChildren type
const AuthProvider = (props: PropsWithChildren<object>) => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the AuthContext
const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};

export default AuthProvider;
export { useAuth };
