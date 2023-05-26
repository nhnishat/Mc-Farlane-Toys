import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Login = () => {
	const [error, setError] = useState('');
	console.log(error);
	const [showPassword, setShowPassword] = useState(false);
	const { SingIn, googleSingIn, githubSingIn, resetPassword } =
		useContext(AuthContext);
	const emailRef = useRef();

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	console.log(from);

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);
		SingIn(email, password)
			.then((Result) => {
				const loggedUser = Result.user;
				console.log(loggedUser);
				setError('');
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			});
	};

	const handleSingInWithGoogle = () => {
		googleSingIn()
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				setError(' ');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const handleSingInWithGithub = () => {
		githubSingIn()
			.then((result) => {
				const loggedUser = result.user;
				setError('');
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const handleResetPassword = () => {
		const email = emailRef.current.value;
		if (!email) {
			alert('please provide your email address to reset password');
		}
		resetPassword(email)
			.then(() => {
				alert('please check your email');
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="hero bg-base-200">
			<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20">
				<h1 className="text-3xl font-bold text-center">Login now!</h1>
				<form onSubmit={handleLoginSubmit}>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								ref={emailRef}
								placeholder="email"
								className="input input-bordered"
								name="email"
							/>
						</div>
						<div className="relative">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									// type="password"
									type={showPassword ? 'text' : 'password'}
									placeholder="password"
									className="input input-bordered"
									name="password"
								/>
								<Link
									onClick={() => {
										setShowPassword(!showPassword);
									}}
									className="absolute bottom-0 end-0 p-2 text-black text-center "
								>
									{showPassword ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
											/>
										</svg>
									)}
								</Link>
							</div>
						</div>

						<label className="label">
							<Link
								onClick={handleResetPassword}
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</Link>
						</label>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
						<p>
							Dont’t have an Account ?
							<Link to="/register" className="text-red-500 ms-2">
								Register
							</Link>
						</p>
						<div>
							<button
								onClick={handleSingInWithGoogle}
								className="btn btn-outline btn-primary mt-3"
							>
								<img
									src="https://i.ibb.co/DVf4DvH/google-logo-clipart-transparent-removebg-preview.png"
									alt=""
									className="w-10 h-10"
								/>
								Login With Google
							</button>

							<button
								onClick={handleSingInWithGithub}
								className="btn btn-outline btn-primary my-3"
							>
								<img
									src="https://i.ibb.co/vv287wt/github-PNG84.png"
									alt=""
									className="w-10 h-10"
								/>
								Login With Github
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
