import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/McFarlane-Toys-448x448.png';
import { AuthContext } from '../../Auth/AuthProvider';

const NabBar = () => {
	const { currentUser, LogOut } = useContext(AuthContext);

	const handleLogOut = () => {
		LogOut();
	};

	const navMenu = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Home
				</NavLink>
			</li>
			<img src="" alt="" />
			<li>
				<NavLink
					to="/allToy"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					All Toys
				</NavLink>
			</li>
			{currentUser ? (
				<>
					<li>
						<NavLink
							to="/myToy"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							My Toy
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/addAToy"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							Add A Toy
						</NavLink>
					</li>
				</>
			) : (
				''
			)}
			<li>
				<NavLink
					to="/blogs"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Blogs
				</NavLink>
			</li>
			<li>
				<NavLink
					to=""
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Order
				</NavLink>
			</li>
			<li>
				<NavLink
					to=""
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Contact Us
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-200 rounded-xl mt-3">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navMenu}
					</ul>
				</div>
				<Link>
					<img src={logo} alt="" className="w-20 h-20" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navMenu}</ul>
			</div>
			<div className="navbar-end">
				{currentUser ? (
					<>
						<img
							src={currentUser.photoURL}
							alt=""
							title={currentUser.displayName}
							className="rounded-full h-10 w-10 mx-3"
						/>
						<button className="btn btn-active btn-primary">
							<NavLink
								to=""
								onClick={handleLogOut}
								className={({ isActive }) =>
									isActive ? 'text-white' : 'default'
								}
							>
								Logout
							</NavLink>
						</button>
					</>
				) : (
					<button className="btn btn-active btn-primary">
						<NavLink
							to="/login"
							className={({ isActive }) =>
								isActive ? 'text-white' : 'default'
							}
						>
							login
						</NavLink>
					</button>
				)}
			</div>
		</div>
	);
};

export default NabBar;
