/**@format*/

import Axios from "axios";

const axios = Axios.create({
	//TODO: Refactor to use .env and not hardcoded URI
	baseURL: "http://localhost:8000",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: true,
});

export default axios;
