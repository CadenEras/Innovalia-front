import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useState } from 'react';

// Composant ChampSaisie
const ChampSaisie = ({ label, value, onChange, placeholder }) => (
	<div className="row">
		<div className="col-md-6">
			<label className="labels">{label}</label>
			<input
				type="text"
				className="form-control"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	</div>
);

const FormationPage = ({ formation }) => {
	const router = useRouter();
	const [intitule, setIntitule] = useState(formation.For_Intitule);
	const [description, setDescription] = useState(formation.For_Description);
	const [tarif, setTarif] = useState(formation.For_Tarif_HT);
	const [duree, setDuree] = useState(formation.For_Duree);
	const [typeIntitule, setTypeIntitule] = useState(formation.For_Type_Intitule);
	const [typeFormation, setTypeFormation] = useState(formation.For_Type_Formation);

	const handleEdit = async () => {
		try {
			// Effectuer une requête PUT pour mettre à jour la formation
			await axios.put(`/api/admin/dashboard/formations/${formation.id}`, {
				For_Intitule: intitule,
				For_Description: description,
				For_Tarif_HT: tarif,
				For_Duree: duree,
				For_Type_Intitule: typeIntitule,
				For_Type_Formation: typeFormation,
			});

			// Rediriger vers la page de détails de la formation après la mise à jour
			await router.push(`/admin/formations/${formation.id}`);
		} catch (error) {
			console.error('Erreur lors de la mise à jour de la formation :', error);
		}
	};

	const handleDelete = async () => {
		try {
			// Effectuer une requête DELETE pour supprimer la formation de l'API
			await axios.delete(`/api/admin/dashboard/formations/${formation.id}`);
			// Rediriger vers la liste des formations
			await router.push('/admin/formations');
		} catch (error) {
			console.error('Erreur lors de la suppression de la formation :', error);
		}
	};

	return (
		<div>
			<div style={{ width: '400px', height: '300px', backgroundColor: '#f5f5f5' }}>
				<h2>Formation details</h2>

				<ChampSaisie
					label="Nom"
					value={intitule}
					onChange={(e) => setIntitule(e.target.value)}
					placeholder="formation.For_Intitule"
				/>

				{/* Ajoutez les autres champs de saisie en utilisant le composant ChampSaisie */}
				<ChampSaisie
					label="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="formation.For_Description"
				/>

				<ChampSaisie
					label="Tarif HT"
					value={tarif}
					onChange={(e) => setTarif(e.target.value)}
					placeholder="formation.For_Tarif_HT"
				/>

				<ChampSaisie
					label="Durée"
					value={duree}
					onChange={(e) => setDuree(e.target.value)}
					placeholder="formation.For_Duree"
				/>

				<ChampSaisie
					label="Type d'intitulé"
					value={typeIntitule}
					onChange={(e) => setTypeIntitule(e.target.value)}
					placeholder="formation.For_Type_Intitule"
				/>

				<ChampSaisie
					label="Type de formation"
					value={typeFormation}
					onChange={(e) => setTypeFormation(e.target.value)}
					placeholder="formation.For_Type_Formation"
				/>

				<div className="row">
					<div className="col-md-6">
						<button onClick={handleEdit}>Edit</button>
					</div>
					<div className="col-md-6">
						<button onClick={handleDelete}>Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps({ params }) {
	const response = await axios.get(`/api/admin/dashboard/formations/${params.id}`);
	const formation = response.data;

	return {
		props: {
			formation,
		},
	};
}

export default FormationPage;
