import queryString from 'query-string';
import jwtDecode from 'jwt-decode';
import { User, UserLogin } from '@/types/AppTypes';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type JwtUser = {
	username: string;
	// eslint-disable-next-line camelcase
	first_name: string;
	// eslint-disable-next-line camelcase
	last_name: string;

	exp: number;
}

export const getDecodedToken = (token: string) => jwtDecode<JwtUser>(token as string);

/**
 * Parses a utl and returns a jwt token
 * @param url url containing a jwt token under id_token url param
 */
export const parseUrl = (url: string) => {
	const parsedUrl = queryString.parse(url);
	const token = parsedUrl.id_token || null;
	return token as string;
};

export const login = (user: UserLogin) => fetch(`${apiUrl}/auth/local`, {
	method: 'POST',
	body: JSON.stringify(user),
});

/**
 * This method takes a token and returns the associated user object
 * @param token a jwt token
 */
export const getUserFromToken = (token: string): User | null => {
	if (typeof (window) === 'undefined') {
		return null;
	}
	if (token === undefined || token === null) {
		return null;
	}
	const decoded = token && getDecodedToken(token as string);

	return decoded === null
		? null
		: {
			username: decoded.username,
			firstName: decoded.first_name,
			lastName: decoded.last_name,
		};
};

/**
 * This method store the user token in local store
 * @param token user token
 */
export const storeUserToken = (token: string) => {
	localStorage.setItem('token', token);
};

/**
 * This method gets the current user from the local storage stored token
 */
export const getCurrentUser = (): User | null => {
	if (typeof (window) === 'undefined') {
		return null;
	}
	const token = localStorage.getItem('token');
	if (token === null || token === 'null' || token === undefined) {
		return null;
	}

	const decoded = getDecodedToken(token as string);
	const currentTime = Date.now() / 1000;

	if (decoded === null || decoded.exp < currentTime) {
		return null;
	}

	return getUserFromToken(token);
};

/**
 * This method verifies if the user is logged in.
 */
export const isAuthenticated = (): boolean => {
	const user = getCurrentUser();
	 return user !== null;
};

export const logout = () => {
	localStorage.removeItem('token');
};
