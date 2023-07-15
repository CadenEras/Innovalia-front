/**@format*/

import Link from "next/link";

export default function FormationCard({ formation }) {
	return (
		<div className='formation-card'>
			<h2>{formation.for_intitule}</h2>
			<p>{formation.for_description}</p>
			<p>Tarif HT: {formation.for_tarif_HT}€</p>
			<p>Tarif TTC: {formation.for_tarif_TTC}€</p>
			<p>Durée: {formation.for_duree}</p>
			<button onClick={handlePayment}>Payer maintenant</button>
		</div>
	);
}
