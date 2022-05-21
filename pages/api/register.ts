import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async (req: any, res: any) => {
	if (req.method === 'POST') {
		const { username, email, password } = req.body;

		console.log(API_URL);
		
		const apiRes = await fetch(`${API_URL}/api/auth/local/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, email, password })
		});
		
		const data = await apiRes.json();
		
		if (apiRes.ok) {
			res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7, // 1 week
				sameSite: 'strict',
				path: '/'
			}));
			
			res.status(200).json({user: data.user});
		} else {
			res.setHeader('Allow', ['POST']);
			res.status(405).json({ message: `Method ${req.method} not allowed` });
		}
	}
}
