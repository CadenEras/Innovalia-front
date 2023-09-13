/**@format*/

import Link from "next/link";

const OrderUser = ({ formation }) => {
	return (
		<div className='formation-card'>
			<h4>{formation.For_Intitule}</h4>
			<p>{formation.For_Description}</p>
			<p>Tarif HT: {formation.For_Tarif_HT}€</p>
			<p>Durée: {formation.For_Duree}</p>
			<Link href="/customer/orders/[id]" as={`/customer/orders/${formation.For_Formation_id}`}>Details</Link>
		</div>
	);
};

export default OrderUser;
