/**@format*/

import React, { useState } from "react";
import { useRouter } from "next/router";
import SidebarAdmin from "@/components/cm-admin/SidebarAdmin";
import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

const CreateFormation = () => {
	const router = useRouter();
	const [error, setError] = useState("");
	const [intitule, setIntitule] = useState("");
	const [description, setDescription] = useState("");
	const [tarif, setTarif] = useState("");
	const [duree, setDuree] = useState("");
	const [type, setType] = useState("");
	const [debut, setDebut] = useState("");
	const [fin, setFin] = useState("");
	const [salle, setSalle] = useState("");
	const { data: session, status } = useSession();

	function formatDate(date) {
		// Check if date is already in "YYYY-MM-DD" format
		if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
			return date;
		}
		let parts = date.split("/");
		return `${parts[2]}-${parts[1]}-${parts[0]}`;
	}

	const handleDebutChange = (event) => {
		let formattedDate = formatDate(event.target.value);
		setDebut(formattedDate);
	};

	const handleFinChange = (event) => {
		let formattedDate = formatDate(event.target.value);
		setFin(formattedDate);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//const csrfToken = await getCsrfToken()
		if (status === "authenticated") {
			const token = session?.user?.accessToken;
			console.log("Token in create form:", token);

			const url = "/api/provider/formations/create";
			const data = {
				For_Intitule: intitule,
				For_Description: description,
				For_Tarif_HT: tarif,
				For_Duree: duree,
				Fort_Type_id: type,
				Res_Dte_Debut: debut,
				Res_Dte_Fin: fin,
				Sal_Salle_id: salle,
			};

			const JSONdata = JSON.stringify(data)

			const option = {
				method: 'POST',
				headers: {
					'Accept': "application/json",
					"Content-Type": "application/json",
					Authorization : `Bearer ` + token
				},
				body: JSONdata
			};

			await fetch(url, option)
				.then(async (response ) => {
					const usable = await response.json();
					console.log("Response in create form:", usable);
					if (response.status === 201) {
						return router.push(`/provider/formations/${usable.data.For_Formation_id}`);
					}
					console.error("Une erreur est survenue lors de la création de la formation.");
					setError(
						usable.data.message ||
						"Une erreur est survenue lors de la création de la formation. Vérifiez les champs."
					);
				})
				.catch((error) => {
					console.error("Erreur lors de la création de la formation:", error);
				});
		}
	};

	return (
		<Layout>
			<div className='container-fluid '>
				<div className='row'>
					<div className='col-3'>
						<SidebarAdmin />
					</div>
					<div className='col-5 '>
						<div className='container-fluid'>
							<div className='row'>
								<h1 className='pt-5' style={{ backgroundColor: "#FF7D00FF" }}>
									Create Formation
								</h1>
							</div>
							{error && (
								<p style={{ color: "red" }}>{error}</p>
							)}
							<form onSubmit={handleSubmit}>
								<div className='pb-1 pt-5'>
									<label htmlFor='For_Intitule' className='pe-2'>
										Intitulé
									</label>
									<input
										type='text'
										className='form-control'
										name='For_Intitule'
										onChange={(event) => setIntitule(event.target.value)}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='For_Description' className='pe-2'>
										Description
									</label>
									<textarea
										className='form-control'
										name='For_Description'
										onChange={(event) => setDescription(event.target.value)}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='For_Tarif_HT' className='pe-2'>
										Tarif HT
									</label>
									<input
										type='number'
										className='form-control'
										name='For_Tarif_HT'
										onChange={(event) => setTarif(event.target.value)}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='For_Duree' className='pe-2'>
										Durée
									</label>
									<input
										type='text'
										className='form-control'
										name='For_Duree'
										onChange={(event) => setDuree(event.target.value)}
										placeholder={"Exemple : 13:30:00"}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='Fort_Type_intitule' className='pe-2'>
										Type
									</label>
									<input
										type='text'
										className='form-control'
										name='Fort_Type_intitule'
										onChange={(event) => setType(event.target.value)}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='Res_Dte_Debut' className='pe-2'>
										Date de début
									</label>
									<input
										type='date'
										className='form-control'
										name='Res_Dte_Debut'
										onChange={handleDebutChange}
										required
									/>
								</div>
								<div className='pb-1 pt-5'>
									<label htmlFor='Res_Dte_Fin' className='pe-2'>
										Date de fin
									</label>
									<input
										type='date'
										className='form-control'
										name='Res_Dte_Fin'
										onChange={handleFinChange}
										required
									/>
								</div>
								<div className='pb-5 pt-5'>
									<label htmlFor='Sal_Salle_id' className='pe-2'>
										Salle ID
									</label>
									<input
										type='number'
										className='form-control'
										name='Sal_Salle_id'
										onChange={(event) => setSalle(event.target.value)}
										required
									/>
								</div>
								<button
									type='submit'
									className='cm-orange-button cm-btn btn-xl text-uppercase'
								>
									Create
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};


export default CreateFormation;
