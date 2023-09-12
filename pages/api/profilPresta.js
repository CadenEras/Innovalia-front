/**@format*/

const axios = require('axios');

export default async function handler(req, res) {
	try {
		const headers = req.headers
		console.log(headers)

		if (!headers) {
			return res.status(406).json({ data: 'Not Acceptable error: Server cannot produce a response matching the list of acceptable values.' })
		}

		const response = await axios.get('http://51.77.213.191:8000/api/presta/profil',{ headers })
		// Handle successful response
		return res.status(response.status).json({ data: response.data})
	} catch (error) {
		if (error.response) {
			// The request was made, but the server responded with a status code
			// that falls out of the range of 2xx
			console.error('Response status:', error.response.status);
			const status = error.response.status;

			if (status === 400) {
				res.status(400).json({ message: 'Bad Request error: The request is invalid.' });
			} else if (status === 401) {
				res.status(401).json({ message: 'Unauthorized error: You are not logged in.' });
			} else if (status === 403) {
				res.status(403).json({ message: 'Forbidden error: You do not have permission.' });
			} else if (status === 404) {
				res.status(404).json({ message: 'Not Found error: Resource not found.' });
			} else if (status === 405) {
				res.status(405).json({ message: 'Method Not Allowed error: Invalid HTTP method.' });
			} else if (status === 406) {
				res.status(406).json({ message: 'Not Acceptable error: Server cannot produce a response matching the list of acceptable values.' });
			} else if (status === 500) {
				res.status(500).json({ message: 'Internal Server Error: Something went wrong on the server.' });
			} else {
				res.status(status).json({ message: 'Unhandled error.', data: error.response.data });
			}
		} else if (error.request) {
			// The request was made, but no response was received
			// This can happen if the server is down
			res.status(500).json({ message: 'No response received.' });
		} else {
			// Something happened in setting up the request that triggered the error
			res.status(500).json({ message: 'Request error.', error: error.message });
		}
	}
}

