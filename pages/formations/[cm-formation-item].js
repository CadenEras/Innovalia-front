/**@format*/

import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import FormationCard from "@/components/cm-formation/formationCard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export default function CmFormationItem() {
	const router = useRouter();
	const { id } = router.query;
	const { data: session } = useSession();
	const [formation, setFormation] = useState(null);

	useEffect(() => {
		if (!id) return;

		// Fetch the formation by ID
		const fetchFormation = async () => {
			try {
				const response = await fetch(`/api/formations/${id}`, {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				});
				if (response.ok) {
					const data = await response.json();
					setFormation(data);
				} else {
					console.error("Formation not found");
				}
			} catch (error) {
				console.error("Error fetching formation:", error);
			}
		};

		fetchFormation();
	}, [id]);

	return (
		<Layout>
			<div>
				{formation && (
					<div>
						<h1>{formation.For_Intitule}</h1>
						<p>{formation.For_Description}</p>
						<p>HT Price: {formation.For_Tarif_HT}</p>
						<p>TTC Price: {formation.For_Tarif_TTC}</p>
						<p>Duration: {formation.For_Duree}</p>
						<p>Address: {formation.Adr_Adresse_L1}</p>
						<p>Zip Code: {formation.Adr_CP}</p>
						<p>City: {formation.Adr_Ville}</p>
						{session ? (
							<button>S&apos;inscrire</button>
						) : (
							<p>Vous devez être connecté pour vous inscrire</p>
						)}
					</div>
				)}
			</div>
		</Layout>
	);
}

/*export async function getStaticPaths() {
	const res = await fetch("http://51.77.213.191:8000/api/formations");
	const formations = await res.json();

	const paths = formations.map((formation) => ({
		params: { id: formation.id.toString() },
	}));

	return { paths, fallback: true };
}*/

/*export async function getStaticProps({ params }) {
	const res = await fetch(
		`http://51.77.213.191:8000/api/formations/${params.id}`
	);
	const formation = await res.json();

	return {
		props: {
			formation,
		},
		revalidate: 1,
	};
}*/
