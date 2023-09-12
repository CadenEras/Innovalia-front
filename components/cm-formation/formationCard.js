/**@format*/

/*import Link from "next/link";

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
}*/


import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

function FormationList() {
	const { data: session } = useSession();
	const [formations, setFormations] = useState([]);

	useEffect(() => {
		// Fetch all formations
		const fetchFormations = async () => {
			try {
				const response = await fetch("/api/formations/index", {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				if (response.ok) {
					const data = await response.json();
					setFormations(data);
				}
			} catch (error) {
				console.error("Error fetching formations:", error);
			}
		};

		fetchFormations();
	}, []);

	return (
		<div>
			<h1>Formations</h1>
			{formations.map((formation) => (
				<div key={formation.For_Formation_id}>
					<h2>{formation.For_Intitule}</h2>
					<p>{formation.For_Description}</p>
					<p>Tarif TTC: {formation.For_Tarif_TTC}</p>
					<p>Durée: {formation.For_Duree}</p>
					{session && (
						<Link href={`/formation/${formation.For_Formation_id}`}>
							<a>En savoir plus</a>
						</Link>
					)}
				</div>
			))}
		</div>
	);
}

export default FormationList;