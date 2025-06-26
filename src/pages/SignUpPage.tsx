import { Brain } from "@/common/components/icons/Brain";
import SignupForm from "@/features/auth/components/SignupForm";

const SignUp = () => {
	return (
		<div className="min-h-screen bg-quiz-soft-purple py-12">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-xl shadow-sm overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<SignupForm />
							{/* Right side - Illustration */}
							<div className="hidden md:block bg-quiz-soft-purple relative overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center p-8">
									<div className="text-center">
										<div className="mb-6">
											<div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center">
												<Brain className="h-16 w-16 text-quiz-primary" />
											</div>
										</div>
										<h3 className="text-2xl font-bold text-quiz-dark mb-3">
											Test Your Knowledge
										</h3>
										<p className="text-quiz-primary max-w-md">
											Create engaging quizzes, challenge friends, and track your
											progress with our powerful quiz platform.
										</p>

										{/* Floating elements for decoration */}
										<div className="absolute top-10 left-10 w-16 h-16 bg-quiz-secondary/30 rounded-full"></div>
										<div className="absolute bottom-10 right-10 w-24 h-24 bg-quiz-secondary/30 rounded-full"></div>
										<div className="absolute top-1/2 right-10 w-12 h-12 bg-quiz-secondary/40 rounded-full"></div>
										<div className="absolute bottom-1/4 left-10 w-20 h-20 bg-quiz-secondary/30 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
