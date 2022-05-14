import cookie from 'cookie';

export default async (req: any, res: any) => {
	if (req.method === 'POST') {
		res.setHeader('Set-Cookie', cookie.serialize('token', '', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			expires: new Date(0),
			sameSite: 'strict',
			path: '/'
		}));
		
		res.status(200).json({message: 'Logged out'});
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
}
