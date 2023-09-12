/**@format*/

import { useRouter } from "next/router";
import axios from "axios";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "@/components/layout";

// Composant ChampSaisie
const ChampSaisie = ({ label, value, onChange, placeholder }) => (
	<div className='row'>
		<div className='col-md-6'>
			<label className='labels'>{label}</label>
			<input
				type='text'
				className='form-control'
				value={value}
				onChange={onChange}
				placeholder={placeholder || ''} // Use placeholder or an empty string as the default
			/>
		</div>
	</div>
);

export default function FormationPage ({ formation }) {
	const { data: session } = useSession()
	const router = useRouter();
	const [intitule, setIntitule] = useState(formation.data.For_Intitule);
	const [description, setDescription] = useState(formation.data.For_Description);
	const [tarif, setTarif] = useState(formation.data.For_Tarif_HT);
	const [duree, setDuree] = useState(formation.data.For_Duree);
	const [typeFormation, setTypeFormation] = useState(
		formation.data.Fort_Type_id
	);
console.log(formation)
	const handleEdit = async () => {
		try {
			// Effectuer une requête PUT pour mettre à jour la formation
			/*await axios.put(`/api/provider/formations/${formation.id}`, {
				For_Intitule: intitule,
				For_Description: description,
				For_Tarif_HT: tarif,
				For_Duree: duree,
				For_Type_Intitule: typeIntitule,
				For_Type_Formation: typeFormation,
			});*/
			console.log("Not implemented yet...")
			// Rediriger vers la page de détails de la formation après la mise à jour
			/*await router.push(`/admin/formations/${formation.id}`);*/
		} catch (error) {
			console.error("Erreur lors de la mise à jour de la formation :", error);
		}
	};

	const handleDelete = async () => {
		try {
			console.log("Not implemented yet...")
			// Effectuer une requête DELETE pour supprimer la formation de l'API
			/*await axios.delete(`/api/admin/dashboard/formations/${formation.id}`);
			// Rediriger vers la liste des formations
			await router.push("/admin/formations");*/
		} catch (error) {
			console.error("Erreur lors de la suppression de la formation :", error);
		}
	};

	return (
		<Layout>
			<div>
				<div>
					<h2>Formation details</h2>
					<ChampSaisie
						label='Nom'
						value={intitule}
						onChange={(e) => setIntitule(e.target.value)}
						placeholder={formation.data.For_Intitule}
					/>
					{/* Ajoutez les autres champs de saisie en utilisant le composant ChampSaisie */}
					<ChampSaisie
						label='Description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder={formation.data.For_Description}
					/>
					<ChampSaisie
						label='Tarif HT'
						value={tarif}
						onChange={(e) => setTarif(e.target.value)}
						placeholder={formation.data.For_Tarif_HT}
					/>
					<ChampSaisie
						label='Durée'
						value={duree}
						onChange={(e) => setDuree(e.target.value)}
						placeholder={formation.data.For_Duree}
					/>
					<ChampSaisie
						label='Type de formation'
						value={typeFormation}
						onChange={(e) => setTypeFormation(e.target.value)}
						placeholder={formation.data.For_Type_Formation}
					/>
					<div className='row'>
						<div className='col-md-6'>
							<button onClick={handleEdit}>Edit</button>
						</div>
						<div className='col-md-6'>
							<button onClick={handleDelete}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
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
	console.log(formation)

	return {
		props: {
			formation,
		},
	};
}

FormationPage.auth = true;
