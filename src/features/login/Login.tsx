import RegBanner from "../../ui/RegBanner";
import { Form, Link, useNavigation } from "react-router-dom";

function Login() {
	const navigation = useNavigation();
	const loading = navigation.state === "submitting";

	return (
		<div className="flex">
			<div className="w-1/2 h-screen flex items-center justify-center bg-gray-100">
				<div className="w-[70%] lg:w-[50%] ">
					<h1 className="text-center font-semibold text-6xl mb-10 font-cabinSketch">
						Welcome Back
					</h1>
					<Form method="POST" className="font-oxygen" action="/login">
						<div className="mb-5">
							<label htmlFor="email" className=" block mb-2 font-semibold">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="password" className=" block mb-2 font-semibold">
								Password
							</label>
							<input
								name="password"
								type="password"
								id="password"
								min={8}
								className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="bg-blue-600 block w-full py-2 text-white rounded disabled:bg-blue-300 disabled:cursor-wait"
								disabled={loading}
							>
								{loading ? "Loading" : "Login"}
							</button>
						</div>
					</Form>
					<div className="text-center mt-5">
						<h3>Already have an account?</h3>
						<Link to="/signup" className="text-blue-600 font-semibold">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
			<RegBanner />
		</div>
	);
}
export default Login;
