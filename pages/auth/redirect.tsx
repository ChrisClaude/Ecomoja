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
		if (user || getCurrentUser()) {
			router.push('/');
		}

		if (!user && getCurrentUser() !== null) {
			const url = window.location.href;
			const token = parseUrl(url);
			storeUserToken(token);
			const currentUser = getUserFromToken(token);
			dispatch({
				type: 'SET_CURRENT_USER',
				payload: currentUser,
			});
		}
	});

	return (
		<div>Login successful. You will be redirected to another page shortly.</div>
	);
};

export default Redirect;
