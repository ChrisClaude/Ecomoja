import cookie from 'cookie';
import { API_URL } from '@/config/index';

export const getCartByUserId = async(req, res) => {
	const {id} = req.query
	console.log(id);
	if (req.method === 'GET') {
		if (!req.headers.cookie) {
			res.status(403).json({ message: 'Not Authorized' });
			return;
		}

		const { token } = cookie.parse(req.headers.cookie);
		const strapiRes = await fetch(`${API_URL}/carts/user/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const response = await strapiRes.json();

		if (strapiRes.ok) {
			res.status(200).json({ response });
		} else {
			res.status(403).json({ message: 'Could not get your cart item' });
		}
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
}

export default getCartByUserId;