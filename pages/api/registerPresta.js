/**@format*/

const axios = require('axios');

export default async function handler(req, res) {
	const body = req.body
	const headers = req.headers

	console.log(body)
	console.log(headers)

	if (!body) {
		return res.status(400).json({ data: 'Body not found' })
	}

	if (!headers) {
		return res.status(406).json({ data: 'Not acceptable' })
	}

	const response = await axios.post('http://51.77.213.191:8000/api/auth/register/prestataires', body, headers);

	if (response.status === 200) {
		return res.status(response.status).json({ data: response.data})
	} else {
		return res.status(response.status).json({ data: response.data?response.data : 'No data error available...' })
	}
}