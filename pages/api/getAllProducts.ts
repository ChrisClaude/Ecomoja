import cookie from 'cookie';
import { API_URL } from '@/config/index';

export const getAllProducts = async (req, res) => {

		const strapiRes = await fetch(`${API_URL}/products?populate=*`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const response = await strapiRes.json();

		if (strapiRes.ok) {
			res.status(200).json({ response });
		} else {
			res.status(403).json({ message: 'Could not get products' });
		}
};

export default getAllProducts;
