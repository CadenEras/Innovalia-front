/**@format*/

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SidebarAdmin from "@/components/cm-admin/SidebarAdmin";

const CreateFormation = () => {
	const router = useRouter();

	const [form, setForm] = useState({
		For_Intitule: "",
		For_Description: "",
		For_Tarif_HT: 0,
		For_Duree: "",
		Fort_Type_intitule: "",
		Res_Dte_Debut: "",
		Res_Dte_Fin: "",
		Sal_Salle_id: 0,
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"/api/admin/dashboard/formations",
				form
			);
			// Gérer le succès, rediriger vers la page de la formation nouvellement créée ou afficher un message de réussite
			console.log(response.data);
			await router.push(`/formations/${response.data.id}`);
		} catch (error) {
			// Gérer l'erreur, afficher un message d'erreur ou des erreurs de validation
			console.error("Erreur lors de la création de la formation :", error);
		}
	};

	return (
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
						<form onSubmit={handleSubmit}>
							<div className='pb-1 pt-5'>
								<label htmlFor='For_Intitule' className='pe-2'>
									Intitulé
								</label>
								<input
									type='text'
									className='form-control'
									name='For_Intitule'
									value={form.For_Intitule}
									onChange={handleChange}
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
									value={form.For_Description}
									onChange={handleChange}
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
									value={form.For_Tarif_HT}
									onChange={handleChange}
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
									value={form.For_Duree}
									onChange={handleChange}
									required
								/>
							</div>
							<div className='pb-1 pt-5'>
								<label htmlFor='Fort_Type_intitule' className='pe-2'>
									Type intitulé
								</label>
								<input
									type='text'
									className='form-control'
									name='Fort_Type_intitule'
									value={form.Fort_Type_intitule}
									onChange={handleChange}
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
									value={form.Res_Dte_Debut}
									onChange={handleChange}
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
									value={form.Res_Dte_Fin}
									onChange={handleChange}
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
									value={form.Sal_Salle_id}
									onChange={handleChange}
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
	);
};

export default CreateFormation;
