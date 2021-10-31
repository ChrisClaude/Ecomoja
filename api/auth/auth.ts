import * as qs from 'query-string';
import jwtDecode from 'jwt-decode';
import { User } from '@/types/AppTypes';

export const getDecodedToken = (token: string) => jwtDecode<User>(token as string);

/**
 * Parses a utl and returns a jwt token
 * @param url url containing a jwt token under id_token url param
 */
export const parseUrl = (url: string) => {
	const parsedUrl = qs.parse(url);
	const token = parsedUrl.id_token || null;
	return token as string;
};

/**
 * This method takes a token and returns the associated user object
 * @param token a jwt token
 */
export const getUserFromToken = (token: string): User | null => {
	if (token === undefined || token === null) {
		return null;
	}
	const decoded = token && getDecodedToken(token as string);

	return decoded === null
		? null
		: {
			username: decoded.username,
			firstName: decoded.firstName,
			lastName: decoded.lastName,
		};
};

/**
 * This methods store the user token in local store
 * @param token user token
 */
export const storeUserToken = (token: string) => {
	localStorage.setItem('token', token);
};

/**
 * This methods gets the current user from the local storage stored token
 */
export const getCurrentUser = (): User | null => {
	if (
		localStorage.getItem('token') === null ||
		localStorage.getItem('token') === 'null' ||
		localStorage.getItem('token') === undefined
	) {
		return null;
	}

	console.log(typeof localStorage.getItem('token'));
	return getUserFromToken(localStorage.getItem('token'));
};

export const logout = () => {
	localStorage.removeItem('token');
};
