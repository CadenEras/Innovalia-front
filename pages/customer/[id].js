/**@format*/

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Account() {
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(false)
	const { data: session, status } = useSession();
	const [error, setError] = useState(null); // Add an error state

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

				const url = "/api/profil";

				const fetchData = async () => {
					try {
						setLoading(true);
						const response = await fetch(url, option);
						console.log("Response status:", response.status);

						if (response.status === 401) {
							// Handle unauthorized access
							setLoading(false);
							setError("Unauthorized access : You are not logged in !");
							return;
						}

						if (response.status === 403) {
							// Handle unauthorized access
							setLoading(false);
							setError("Forbidden access to profile : You do not have permission.");
							return;
						}

						if (!response.ok) {
							// Handle other errors
							setLoading(false);
							setError("Error fetching profile data");
							return;
						}

						const usable = await response.json();
						setUser(usable.data);
						setLoading(false);
						setError(null);
						console.log("Data in profile:", usable);
					} catch (e) {
						setLoading(false);
						setError("Error fetching profile data: " + e.message);
						setUser(null);
						console.log("Error fetching profile data:", e);
					}
				};
				fetchData();
			}
		},
		[session, status])
	if (isLoading) return (<p>Loading...</p>)
	if (error) {
		// Handle errors by displaying the error message
		return (
			<div>
				<h1>Error</h1>
				<p>{error}</p>
			</div>
		);
	}
	if (!user) return (<p>No profile data</p>)

	return (
		<Layout>
			<section className='container rounded mt-5 mb-10'>
				<section>
					<h1>Bonjour {user.Per_Prenom} !</h1>
				</section>
				<div className='row'>
					<div className='col-12 col-md-3 border-right'>
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
