/**@format*/

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta name="csrf-token" content="{{ csrf_token() }}" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
