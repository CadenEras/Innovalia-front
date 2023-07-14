/**@format*/

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import * as Tracings from "@sentry/browser";


export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return getLayout(<Component {...pageProps} />);
}
