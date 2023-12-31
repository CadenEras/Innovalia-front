/**@format*/

import Link from "next/link";

const FormationCardAdmin = ({ formation }) => {
	return (
		<div className='formation-card'>
			<h4>{formation.For_Intitule}</h4>
			<p>{formation.For_Description}</p>
			<p>Tarif HT: {formation.For_Tarif_HT}€</p>
			<p>Durée: {formation.For_Duree}</p>
			<Link href="/provider/formations/[id]" as={`/provider/formations/${formation.For_Formation_id}`}>En savoir plus</Link>
		</div>
	);
};

export default FormationCardAdmin;
