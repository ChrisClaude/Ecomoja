import * as React from 'react';
import {
	getCurrentUser,
	getUserFromToken,
	parseUrl,
	storeUserToken,
} from '@/api/auth';
import { UIContext } from '@/api/context/UIContext';
import { useRouter } from 'next/router';

const Redirect = () => {
	const { user, dispatch } = React.useContext(UIContext);
	const router = useRouter();

	React.useEffect(() => {
		console.log(
			'user || getCurrentUser()',
			user !== null || getCurrentUser() !== null,
		);
		if (user !== null || getCurrentUser() !== null) {
			router.push('/');
		}

		console.log(user === null && getCurrentUser() !== null);

		if (user === null || getCurrentUser() !== null) {
			const url = window.location.href;
			const token = parseUrl(url);
			storeUserToken(token);
			const currentUser = getUserFromToken(token);
			setTimeout(() => {
				dispatch({
					type: 'SET_CURRENT_USER',
					payload: currentUser,
				});
				console.log('before push');
				router.push('/');
			});
		}
	}, []);

	return (
		<div>Login successful. You will be redirected to another page shortly.</div>
	);
};

export default Redirect;
