import { useRouter } from 'next/router';
import { createContext, useCallback, useEffect, useState } from 'react';
import { NEXT_URL } from '@/config/index';
// eslint-disable-next-line import/no-cycle
import { CartItem } from '@/types/AppTypes';
// eslint-disable-next-line import/no-cycle
import { insertItemsInLocalStorage } from '@/helpers/main';


export type AuthState = {
	user: any;
	error: any;
	register: (username: string, email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: (cartItems:CartItem[]) => void;
	isAuthenticated: () => boolean;
}

export type User = {
	id: number;
	username: string;
	email: string;
	provider: string;
	confirmed: string;
	blocked: string;
	createdAt: string;
	updatedAt: string;
};

const AuthContext = createContext<AuthState | any>({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState<User>(null);
	const [error, setError] = useState(null);

	const router = useRouter();

	const checkIfUserLoggedIn = useCallback(async () => {
		try{
			const res = await fetch(`${NEXT_URL}/api/user`);
		const data = await res.json();
		if (res.ok) {
			setUser(data.user);
		} else {
			setUser(null);
		}
		}
		catch(err){
			console.error(err);
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
	const login = async ( identifier, password ) => {
		try{
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
				router.push('/');
			} else {
				setError(data.message);
				setError(null);
			}
		}
		catch(err){
			console.error(err);
		}

	};

	// Logout user
	const logout = async (cartItems) => {
		const res = await fetch(`${NEXT_URL}/api/logout`, {
			method: 'POST',
		});

		if (res.ok) {
			insertItemsInLocalStorage(cartItems);
			setUser(null);
			router.push('/');
		}
	};

	// Check if user is authenticated
	const isAuthenticated = () => !!user;

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
