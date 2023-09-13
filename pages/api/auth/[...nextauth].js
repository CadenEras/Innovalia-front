/**@format*/

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials',
			credentials: {
				email: { label: 'email', type: 'email', placeholder: 'jsmith@example.com' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				const payload = {
					Per_Email: credentials?.email,
					Per_MDP: credentials?.password,
				};
				const res = await fetch('http://51.77.213.191:8000/api/auth/login', {
					method: 'POST',
					body: JSON.stringify(payload),
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
				});

				const user = await res.json();
				if (!res.ok) {
					throw new Error(user.message);
				}
				if (res.ok && user) {
					return user;
				}
				return null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/auth/login',
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (account && user) {
				/*console.log("account : "+JSON.stringify(account) );
				console.log("user : "+JSON.stringify(user) );
				console.log("token : "+JSON.stringify(token) );*/
				return {
					...token,
					accessToken: user?.token,
					userId: user?.user?.Per_Personne_id,
					userPerm: user?.user?.Per_Permission
				};
			}
			return token;
		},

		async session({ session, token }) {
			session.user.accessToken = token?.accessToken;
			session.user.userId = token?.userId;
			session.user.userPerm = token?.userPerm;
			return session;
		},
	},
	debug: process.env.NODE_ENV === 'development',
});