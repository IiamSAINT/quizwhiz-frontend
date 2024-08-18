import RegBanner from "../../ui/RegBanner";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

function Signup() {
	const navigation = useNavigation();
	const loading = navigation.state === "submitting";
	const errMessage = useActionData();
	return (
		<div className="flex">
			<div className="w-1/2 h-screen flex items-center justify-center bg-gray-100">
				<div className="w-[70%] lg:w-[50%] ">
					<h1 className="text-center font-semibold text-5xl mb-10 font-cabinSketch">
						Create Account
					</h1>
					<Form method="POST" className="font-oxygen">
						<div className="mb-5">
							<label htmlFor="name" className=" block mb-2 font-semibold">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
							/>
						</div>
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
							<label htmlFor="password" className="block mb-2 font-semibold">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
							/>
						</div>
						<p>{errMessage ? errMessage + "" : ""}</p>
						<div>
							<button
								type="submit"
								className="bg-blue-600 block w-full py-2 text-white rounded disabled:bg-blue-400"
								disabled={loading}
							>
								{loading ? "Loading" : "Create Account"}
							</button>
						</div>
					</Form>
					<div className="text-center mt-5">
						<h3>Already have an account?</h3>
						<Link to="/" className="text-blue-600 font-semibold">
							Login Instead
						</Link>
					</div>
				</div>
			</div>
			<RegBanner />
		</div>
	);
}

export default Signup;
