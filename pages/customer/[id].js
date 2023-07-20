/**@format*/

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";

export default function Account() {
	const [user, setUser] = useState(null);
	/*const [email, setEmail] = useState(null); // État pour l'email
	const [nom, setNom] = useState(null);
	const [prenom, setPrenom] = useState(null);*/

	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
			const token = localStorage.getItem('token');
			const option = {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization : `Bearer ` + token,
				},
			};

			const url = "/api/profil";

			const fetchData = async () => {

				try {
					setLoading(true);
					const response = await fetch(url, option);

					if (response.status === 401) {
						return (response)
					} else {
						const usable = await response.json();
						setUser(usable.data);
						/*setNom(usable.data.Per_Nom);
						setPrenom(usable.data.Per_Prenom);
						setUser(usable.data.Per_Email);*/
						setLoading(false);
						console.log(usable)
					}
				} catch (e) {
					console.log(e);
				}
			}

			fetchData();
		},
		[])
	if (isLoading) return (<p>Loading...</p>)
	if (!user) return (<p>No profile data</p>)

	return (
		<section className='container rounded mt-5 mb-10'>
			<section>
				<h1>Bonjour {user.Per_Prenom}!</h1>
				{/* Ici, ajoutez les détails de l'abonnement de l'utilisateur */}
			</section>
			<div className='row'>
				<div className='col-12 col-md-3 border-right'>
					{/*<Sidebar onLinkClick={handlePageChange} />*/}
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
									placeholder={user.Per_Prenom}
									value={user.Per_Prenom}
									defaultValue={user.Per_Prenom}
									readOnly={true}
									/*onChange={(e) => setPrenom(e.target.value)}*/
									/>
								</div>
								<div className='col-md-6'>
								<label className='labels'>Nom</label>
								<input
									type='text'
									className='form-control'
									value={user.Per_Nom}
									readOnly={true}
									/*onChange={(e) => setNom(e.target.value)}*/
									placeholder={user.Per_Nom}
								/>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-md-12'>
								<label className='labels py-1'>Email</label>
								<input
									type='email'
									className='form-control'
									placeholder={user.Per_Email}
									value={user.Per_Email}
									readOnly={true}
									/*onChange={(e) => setEmail(e.target.value)}*/
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

Account.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
