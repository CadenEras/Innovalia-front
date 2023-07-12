/**@format*/

import Footer from "./footer";
import AppWrapper from "./AppWrapper";

export default function Layout({ children }) {
	return (
		<>
			<AppWrapper>
					<main>{children}</main>
				<Footer />
			</AppWrapper>

		</>
	);
}
