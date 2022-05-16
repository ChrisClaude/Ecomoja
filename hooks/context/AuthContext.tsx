import { useRouter } from 'next/router';
import { createContext, useCallback, useEffect, useState } from 'react';
import { NEXT_URL } from '@/config/index';

export type AuthState = {
	user: any;
	error: any;
	register: (username: string, email: string, password: string) => void;
	login: (email: string, password: string) => void;
	logout: () => void;
	isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthState | any>({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const router = useRouter();

	const checkIfUserLoggedIn = useCallback(async () => {
		const res = await fetch(`${NEXT_URL}/api/user`);
		const data = await res.json();
		if (res.ok) {
			setUser(data.user);
		} else {
			setUser(null);
		}
	}, []);

	useEffect(() => {
		// Check if user logged in
		checkIfUserLoggedIn();
	}, [checkIfUserLoggedIn]);

	// Register
	const register = async (username: string, email: string, password: string) => {
		const res = await fetch(`${NEXT_URL}/api/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		});

		const data = await res.json();

		if (res.ok) {
			setUser(data.user);
			router.push('/');
		} else {
			setError(data.message);
			setError(null);
		}
	};

	// Login user
	const login = async ({ email: identifier, password }) => {
		const res = await fetch(`${NEXT_URL}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				identifier,
				password,
			}),
		});

		const data = await res.json();

		if (res.ok) {
			setUser(data.user);
			router.push('/account/dashboard');
		} else {
			setError(data.message);
			setError(null);
		}
	};

	// Logout user
	const logout = async () => {
		const res = await fetch(`${NEXT_URL}/api/logout`, {
			method: 'POST',
		});

		if (res.ok) {
			setUser(null);
			router.push('/');
		}
	};
	
	// Check if user is authenticated
	const isAuthenticated = () => !!user

	return (
		<AuthContext.Provider value={{
			user,
			error,
			register,
			login,
			logout,
			isAuthenticated,
		}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
