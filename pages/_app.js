/**@format*/

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps} }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
