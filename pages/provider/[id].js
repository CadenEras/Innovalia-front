/**@format*/

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import SidebarAdmin from "@/components/cm-admin/SidebarAdmin";
import { useSession } from "next-auth/react";

const ProviderDashboard = () => {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(false)
	const { data: session, status } = useSession();


	useEffect(() => {
		if (status === "authenticated") {
			const token = session?.user?.accessToken;
			console.log("Token in profile:", token);
			const option = {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization : `Bearer ` + token,
				},
			};

			const url = "/api/profilPresta";

			const fetchData = async () => {
				try {
					setLoading(true);
					const response = await fetch(url, option);

					if (response.status === 401) {
						// Handle unauthorized access
						setLoading(false);
						setUser(null);
						console.log("Unauthorized access to profile data");
						return;
					}

					if (!response.ok) {
						// Handle other errors
						setLoading(false);
						setUser(null);
						console.log("Error fetching profile data");
						return;
					}

					const usable = await response.json();
					setUser(usable.data);
					setLoading(false);
					console.log("Data in profile:", usable);
				} catch (e) {
					setLoading(false);
					setUser(null);
					console.log("Error fetching profile data:" + e);
				}
			};
			fetchData();
		}
	}, [session, status]);

	if (isLoading) return (<p>Loading...</p>)
	if (!user) return (<p>No profile data</p>)

	return (
		<Layout>
			<section className='container rounded mt-5 mb-10'>
				<section>
					<h1>Bonjour {user.Per_Prenom} !</h1>
				</section>
				<SidebarAdmin />
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
									/>
								</div>
								<div className='col-md-6'>
									<label className='labels'>Nom</label>
									<input
										type='text'
										className='form-control'
										value={user.Per_Nom}
										readOnly={true}
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
									/>
								</div>
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
		</Layout>
	);
};

export default ProviderDashboard;
