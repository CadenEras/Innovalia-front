/**@format*/

import Axios from "axios";
import process from "node:process";

const axios = Axios.create({
		//TODO: Refactor to use .env and not hardcoded URI
	baseURL: "http://localhost:8000",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: true,
});

export default axios;
