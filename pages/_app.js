/**@format*/

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return getLayout(<Component {...pageProps} />);
}
