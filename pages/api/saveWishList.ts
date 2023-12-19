import cookie from 'cookie';
import { API_URL } from '@/config/index';

export const saveWishList = async (req, res) => {
	if (req.method === 'POST') {
		if (!req.headers.cookie) {
			res.status(403).json({ message: 'Not Authorized' });
			return;
		}

		const { token } = cookie.parse(req.headers.cookie);
		const strapiRes = await fetch(`${API_URL}/wish-lists/save`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(req.body),
		});

		const response = await strapiRes.json();

		if (strapiRes.ok) {
			res.status(200).json({ response });
		} else {
			res.status(403).json({ message: 'Could not add your Wish list item' });
		}
	}
	else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
};

export default saveWishList;
