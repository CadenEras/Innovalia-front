/**@format*/

import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		// Assurez-vous de remplacer cette URL par l'URL de votre API
		axios
			.get("https://51.77.213.191:8000/api/orders")
			.then((response) => setOrders(response.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			{orders.map((order) => (
				<div key={order.id}>
					{/* Affichez les informations de la commande comme vous le souhaitez ici */}
				</div>
			))}
		</div>
	);
};

export default OrderHistory;
