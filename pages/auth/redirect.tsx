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

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[dispatch],
	);

	React.useEffect(() => {
		if (user !== null || getCurrentUser() !== null) {
			router.push('/');
		}

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
				router.push('/');
			});
		}
	}, []);

	return (
		<div className="py-8 h-40">
			<p className="text-center text-xl">
				Login successful! You will be redirected to another page shortly.
			</p>
		</div>
	);
};

export default Redirect;
