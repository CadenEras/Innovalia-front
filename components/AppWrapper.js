/**@format*/

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const AppWrapper = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userPerm, setUserPerm] = useState("");

	useEffect(() => {
		const token = Cookies.get("token");
		const userPerm = Cookies.get("userPerm");

		if (token) {
			setIsAuthenticated(true);
			setUserPerm(userPerm); // userPerm is the user type
		} else {
			setIsAuthenticated(false);
		}
	}, []);

	return (
		<div>
			<Navbar isAuthenticated={isAuthenticated} userPerm={userPerm} />
			{children}
		</div>
	);
};

export default AppWrapper;
