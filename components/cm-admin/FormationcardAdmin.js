import Link from "next/link";

const FormationCardAdmin = ({ formation }) => {

	return (
		<div className="formation-card">
			<h2>{formation.For_Intitule}</h2>
			<p>{formation.For_Description}</p>
			<p>Tarif HT: {formation.For_Tarif_HT}€</p>
			<p>Durée: {formation.For_Duree}</p>
			<Link href='/admin/formations/[id]'>En savoir plus</Link>
		</div>
	);
};

export default FormationCardAdmin;