import cookie from 'cookie';
import { API_URL } from '@/config/index';

export const updateCartQuantity = async (req, res) => {
	console.log(req.body);
	if (req.method === 'POST') {
		if (!req.headers.cookie) {
			res.status(403).json({ message: 'Not Authorized' });
			return;
		}

		const { token } = cookie.parse(req.headers.cookie);
		const strapiRes = await fetch(`${API_URL}/carts/updateQuantity`, {
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
			res.status(403).json({ message: 'Could not update quantity'});
		}
	}
	else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
};

export default updateCartQuantity;
