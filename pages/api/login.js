/**@format*/

const axios = require('axios');
//import { RequestCookies, ResponseCookies } from "@edge-runtime/cookies";

export default async function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body

	// Optional logging to see the responses
	// in the command line where next.js app is running.
	//console.log('body: ', body)

	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: 'body not found' })
	}

	//const cookies = new ResponseCookies();


	// Found the name.
	// Sends an HTTP success code
	//http://51.77.213.191:8000/api/auth/register
	const response = await axios.post('http://51.77.213.191:8000/api/auth/login', req.body);
	/*cookies.set('token', response.data.token, {
		httpOnly: true, // true by default
	})*/

	if (response.status === 200) {
		return res.status(response.status).json({ data: response.data})
	} else {
		return res.status(response.status).json({ data: response.data })
	}
}