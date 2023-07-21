/**@format*/

const axios = require('axios');
//import { RequestCookies, ResponseCookies } from "@edge-runtime/cookies";

export default async function handler(req, res) {
	const headers = req.headers

	if (!headers) {
		return res.status(406).json({ data: 'Not acceptable' })
	}

	const response = await axios.get('http://51.77.213.191:8000/api/presta/profil',{ headers })

	if (response.status === 200) {
		return res.status(response.status).json({ data: response.data})
	} else {
		console.log(response.data?response.data : 'No data error available...')
		return res.status(response.status).json({ data: response.data?response.data : 'No data error available...' })
	}
}