/**@format*/

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function Account() {
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
			const token = localStorage.getItem('token');
			const option = {
				method: 'GET',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
			};

			const url = "http://51.77.213.191:8000/api/user/profil";

			const fetchData = async () => {
				try {
					setLoading(true);
					const response = await fetch(url, option);
					const user = await response.json();
					setUser(user);
					setLoading(false);
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
						<form>
							@csrf
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
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

Account.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
