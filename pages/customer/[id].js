/**@format*/

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Sidebar from "/components/cm-account/sidebar";
import axios from "axios";
import Cookies from "js-cookie";

const Account = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const token = Cookies.get("token"); // Récupérez le token du cookie

		if (token) {
			axios
				.get("https://51.77.213.191:8000/api/user/profil", {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					setUser(response.data);
				})
				.catch((error) => {
					console.error(
						"Erreur lors de la récupération des données utilisateur",
						error
					);
				});
		} else {
			console.error("Aucun token d'authentification trouvé");
		}
	}, []);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return (
		<section className='container rounded mt-5 mb-10'>
			<section>
				<h1>Bonjour {user.Per_Prenom}!</h1>
				{/* Ici, ajoutez les détails de l'abonnement de l'utilisateur */}
			</section>
			<div className='row'>
				<div className='col-12 col-md-3 border-right'>
					<Sidebar onLinkClick={handlePageChange} />
				</div>
				<div className='col-12 col-md-9 p-4 border-right'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='text-right'>Profil</h4>
						</div>
						<div className='row mt-2'>
							<div className='col-md-6'>
								<label className='labels'>Prénom</label>
								<input
									type='text'
									className='form-control'
									placeholder='Prénom'
									value={user.Per_Prenom}
								/>
							</div>
							<div className='col-md-6'>
								<label className='labels'>Nom</label>
								<input
									type='text'
									className='form-control'
									value={user.Per_Nom}
									placeholder='user.Per_Nom'
								/>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-md-12'>
								<label className='labels py-1'>Email</label>
								<input
									type='email'
									className='form-control'
									placeholder='email'
									value={user.Per_Email}
								/>
							</div>
							{/* et ainsi de suite pour les autres informations utilisateur... */}
						</div>
						<div className='mt-5 text-center'>
							<button
								className='cm-orange-button cm-btn w-100 w-md-50 mx-auto mt-4'
								type='button'
							>
								Modifier le profil
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Account;

Account.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
