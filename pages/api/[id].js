/**@format*/

const axios = require('axios');
//import { RequestCookies, ResponseCookies } from "@edge-runtime/cookies";

export default async function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body

	if (!body) {
		return res.status(400).json({ data: 'body not found' })
	}


	const response = await axios.post('http://51.77.213.191:8000/api/user/profil', req.body);

	if (response.status === 200) {
		return res.status(response.status).json({ data: response.data})
	} else {
		return res.status(response.status).json({ data: response.data })
	}
}