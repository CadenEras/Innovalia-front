/**@format*/

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterProvider() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [birth, setBirth] = useState("");
	const [siret, setSiret] = useState("");
	const [ape, setApe] = useState("");
	const [tvaIntra, setTvaIntra] = useState("");
	const [description, setDescription] = useState("");
	const [typeId, setTypeId] = useState("");

	function formatDate(date) {
		// Check if date is already in "YYYY-MM-DD" format
		if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
			return date;
		}
		let parts = date.split("/");
		return `${parts[2]}-${parts[1]}-${parts[0]}`;
	}

	const handleBirthChange = (event) => {
		let formattedDate = formatDate(event.target.value);
		setBirth(formattedDate);
	};

	const submitForm = async (event) => {
		event.preventDefault();

		if (password !== passwordConfirm) {
			console.error("Les mots de passe ne correspondent pas");
			return;
		}

		try {
			const url = "/api/registerPresta";
			const data = {
				Per_Dte_Naissance: birth,
				Per_Email: email,
				Per_MDP: password,
				Per_MDP_confirmation: passwordConfirm,
				Pre_SIRET: siret,
				Per_APE: ape,
				Per_TVA_Intra: tvaIntra,
				Pre_Description: description,
				Prest_Type_id: typeId,
			};

			const JSONdata = JSON.stringify(data)

			const option = {
				method: 'POST',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSONdata
			};

			const response = await fetch(url, option)

			if (response.status === 201) {
				console.log("Compte créé avec succès");
				await router.push("/auth/login");
			} else {
				console.error("Une erreur est survenue lors de la création du compte");
			}
		} catch (error) {
			console.error(
				"Une erreur est survenue lors de la création du compte\n",
				error
			);
		}
	};

	return (
		<>
			<section id='register'>
				<div className='cm-auth-bg cm-auth-bg-random'></div>
				<div className='container min-vh-100'>
					<div className='row min-vh-100'>
						<div
							id='register'
							className='cm-theme-bg cm-theme-text rounded my-5 align-self-center col-10 offset-1 col-md-8 offset-md-2'
						>
							<div className='container pt-5 pb-3 d-flex flex-column align-items-center justify-content-around'>
								<div className='row pb-3'>
									<Link href='/'>
										<Image
											src='/../public/logo_cook_master.png'
											alt='cook-master logo'
											className='cm-logo-auth'
											width={90}
											height={96}
										/>
									</Link>
								</div>
								<div className='row'>
									<h2>Créer un compte Prestataire</h2>
								</div>

								<div>
									<form
										id='cm-re-form'
										className='cm-flex-wrap'
										onSubmit={submitForm}
									>
										<div className='cm-flex-width-group'>
											<label htmlFor='lastName'>Nom :</label>
											<input
												id='lastName'
												className='form-control cm-form-orange'
												type='text'
												required='required'
												onChange={(event) => setLastName(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='firstName'>Prénom :</label>
											<input
												id='firstName'
												className='form-control cm-form-orange'
												type='text'
												required='required'
												onChange={(event) => setFirstName(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='email'>Adresse E-mail :</label>
											<input
												id='email'
												className='form-control cm-form-orange'
												type='email'
												required='required'
												onChange={(event) => setEmail(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='password'>Mot de passe :</label>
											<input
												id='password'
												className='form-control cm-form-orange'
												type='password'
												name='password'
												required='required'
												placeholder='Enter password'
												onChange={(event) => setPassword(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='password-conf'>Confirmation :</label>
											<input
												id='password-conf'
												className='form-control cm-form-orange'
												type='password'
												name='password-v'
												required='required'
												placeholder='Enter password Confirmation'
												onChange={(event) =>
													setPasswordConfirm(event.target.value)
												}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='birth'>Date de naissance :</label>
											<input
												id='birth'
												className='form-control cm-form-orange'
												type='date'
												name='birth'
												required='required'
												onChange={handleBirthChange}
											/>
										</div>

										<div className='cm-flex-width-group'>
											<label htmlFor='siret'>SIRET :</label>
											<input
												id='siret'
												className='form-control cm-form-orange'
												type='text'
												required='required'
												onChange={(event) => setSiret(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='ape'>APE :</label>
											<input
												id='ape'
												className='form-control cm-form-orange'
												type='text'
												required='required'
												onChange={(event) => setApe(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='tvaIntra'>TVA Intra :</label>
											<input
												id='tvaIntra'
												className='form-control cm-form-orange'
												type='text'
												required='required'
												onChange={(event) => setTvaIntra(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='description'>Description :</label>
											<textarea
												id='description'
												className='form-control cm-form-orange'
												onChange={(event) => setDescription(event.target.value)}
											/>
										</div>
										<div className='cm-flex-width-group'>
											<label htmlFor='typeId'>Type :</label>
											<input
												id='typeId'
												className='form-control cm-form-orange'
												type='number'
												required='required'
												onChange={(event) => setTypeId(event.target.value)}
											/>
										</div>

										<div className='cm-flex-width-group align-self-center'>
											<div className='form-check d-none'>
												<input
													id='cm-check-newsletter'
													className='form-check-input'
													type='checkbox'
													name='newsletter'
												/>
												<label
													htmlFor='cm-check-newsletter'
													className='form-check-label'
												>
													Newsletter
												</label>
											</div>
											<div className='form-check'>
												<input
													id='cm-check-cgu'
													className='form-check-input'
													type='checkbox'
													name='cgu'
													required='required'
												/>
												<label
													htmlFor='cm-check-cgu'
													className='form-check-label'
												>
													CGU
												</label>
											</div>
										</div>
										<div id='cm-captcha'></div>
										<button
											className='form-control cm-form-orange w-100 w-md-50 mx-auto mt-4'
											type='submit'
										>
											S&apos;inscrire
										</button>
										<input type='hidden' name='_token' value='csrf_token()' />
									</form>
								</div>
								<div className='row'>
									<p>
										Vous avez déjà un compte ?
										<Link
											href='/auth/login'
											className='btn cm-btn-sm cm-orange-button'
										>
											Se connecter
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
