/**@format*/

import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export default function CmFormationItem({ formation }) {
	const router = useRouter();
	const [error, setError] = useState("");
	const { data: session, status } = useSession()
	const [intitule, setIntitule] = useState(formation?.data?.For_Intitule);
	const [description, setDescription] = useState(formation?.data?.For_Description);
	const [tarif, setTarif] = useState(formation?.data?.For_Tarif_HT);
	const [tarifTTC, setTarifTTC] = useState(formation?.data?.For_Tarif_TTC);
	const [duree, setDuree] = useState(formation?.data?.For_Duree);
	const [addresse, setAddresse] = useState(formation?.data?.Adr_Adresse_L1);
	const [cp, setCP] = useState(formation?.data?.Adr_CP);
	const [ville, setVille] = useState(formation?.data?.Adr_Ville);
	const [typeFormation, setTypeFormation] = useState(
		formation?.data?.Fort_Type_id
	);

	/*const handleUnSubscribe = async () => {
		if(status === "authenticated"){
			const token = session?.user?.accessToken;
			try {
				const option = {
					method: 'POST',
					headers: {
						'Accept': "application/json",
						"Content-Type": "application/json",
						Authorization : `Bearer ` + token
					}
				};
				await fetch(`/api/formations/booking/unbook/${formation.data.For_Formation_id}/`, option)
					.then(async (response) => {
						const usable = await response.json();
						console.log("Response in create form:", usable);
						if (response.status === 200) {
							return router.push("/customer/orders/");
						}
						console.error("Une erreur est survenue lors de la désinscription.");
						setError(
							usable.data.message ||
							"Une erreur est survenue lors de la désinscription."
						);
					})
			} catch (error) {
				console.error("Erreur lors de la désinscription :", error);
			}
		}
	};*/

	return (
		<Layout>
			<div>
				{formation && (
					<div>
						<h1>{formation?.data?.For_Intitule}</h1>
						<p>Description: {formation?.data?.For_Description}</p>
						<p>Prix HT: {formation?.data?.For_Tarif_HT}</p>
						<p>Prix TTC: {formation?.data?.For_Tarif_TTC}</p>
						<p>Durée: {formation?.data?.For_Duree}</p>
						<p>Address: {formation?.data?.Adr_Adresse_L1}</p>
						<p>Code postal: {formation?.data?.Adr_CP}</p>
						<p>Ville: {formation?.data?.Adr_Ville}</p>
					</div>
				)}
			</div>
		</Layout>
	);
}

/*export async function getServerSideProps({ params }) {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
	console.log(params.id)
	console.log(baseUrl)
	const url = `${baseUrl}/api/formations/${params.id}`;
	const option = {
		method: 'GET',
		headers: {
			'Accept': "application/json",
			"Content-Type": "application/json",
		}
	};

	const response = await fetch(url, option)
	const formation = await response.json();
	console.log("formation :", formation)
	return {
		props: {
			formation,
		},
	};
}*/