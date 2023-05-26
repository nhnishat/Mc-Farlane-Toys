import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth(app);

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	// create email account
	const userCreate = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// user singIn
	const SingIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// googleSingIn
	const googleSingIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// githubSingIn
	const githubSingIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	// logOut
	const LogOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// user set state

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	// user Update

	const UpdatedProfileInfo = (currentUser, displayName, photo, email) => {
		setLoading(true);
		return updateProfile(currentUser, {
			displayName: displayName,
			photoURL: photo,
			email: email,
		});
	};
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const AuthInfo = {
		currentUser,
		userCreate,
		SingIn,
		googleSingIn,
		githubSingIn,
		LogOut,
		UpdatedProfileInfo,
		resetPassword,
		loading,
	};

	return (
		<AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
