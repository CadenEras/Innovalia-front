/**@format*/

import Layout from "../../components/layout";
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

	const handleSubscribe = async () => {
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

				const url = `/api/formations/booking/${formation.data.For_Formation_id}/`;
				console.log("Url in create form:", url);
				await fetch(url, option)
					.then(async (response) => {
						const usable = await response.json();
						console.log("Response in create form:", usable);
						if (response.status === 201) {
							return router.push("/customer/orders/success");
						}
						console.error("Une erreur est survenue lors de la souscription.");
						setError(
							usable.data ||
							"Une erreur est survenue lors de la souscription."
						);
					})
			} catch (error) {
				console.error("Erreur lors de la souscription :", error);
			}
		}
	};

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
						{session ? (
							<button onClick={handleSubscribe}>S&apos;inscrire</button>
						) : (
							<p>Vous devez être connecté pour vous inscrire</p>
						)}
					</div>
				)}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
	const url = `${baseUrl}/api/formations/${params.cmFormationItem}`;
	const option = {
		method: 'GET',
		headers: {
			'Accept': "application/json",
			"Content-Type": "application/json",
		}
	};

	const response = await fetch(url, option)
	const formation = await response.json();
	return {
		props: {
			formation,
		},
	};
}