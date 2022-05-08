import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const options = {
	providers: [
		Auth0Provider({
			clientId: process.env.AUTH0_CLIENT_ID,
			clientSecret: process.env.AUTH0_CLIENT_SECRET,
			issuer: process.env.AUTH0_ISSUER
		}),
	],
	session: {
		jwt: true,
	},
	callbacks: {
		session: async (session, user) => {
			// eslint-disable-next-line no-param-reassign
			session.jwt = user.jwt;
			// eslint-disable-next-line no-param-reassign
			session.id = user.id;
			return Promise.resolve(session);
		},
		jwt: async (token, user, account) => {
			const isSignIn = !!user;
			if (isSignIn) {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
				);
				const data = await response.json();
				// eslint-disable-next-line no-param-reassign
				token.jwt = data.jwt;
				// eslint-disable-next-line no-param-reassign
				token.id = data.user.id;
			}
			return Promise.resolve(token);
		},
	},
};

const Auth = (req, res) =>
	NextAuth(req, res, options);

export default Auth;
