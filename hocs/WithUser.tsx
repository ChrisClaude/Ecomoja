import * as React from 'react';
import { getCurrentUser } from '@/services/auth';
import { UIContext } from '@/hooks/context/UIContext';
import { useRouter } from 'next/router';

function withUser<T>(Component: React.ComponentType<T>) {
	// eslint-disable-next-line react/display-name
	return (props: T) => {
		const { user, dispatch } = React.useContext(UIContext);
		const router = useRouter();

		React.useEffect(() => {
			if (!user) {
				const currentUser = getCurrentUser();
				if (currentUser) {
					dispatch({
						type: 'SET_CURRENT_USER',
						payload: currentUser,
					});
				} else {
					router.push(process.env.NEXT_PUBLIC_LOGIN_OR_REGISTER);
				}
			}
		}, []);

		return <Component {...(props as T)} />;
	};
}

export default withUser;
