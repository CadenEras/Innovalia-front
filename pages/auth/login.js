/**@format*/

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState(""); // État pour l'email
	const [password, setPassword] = useState(""); // État pour le mot de passe

	const submitForm = async (event) => {
		event.preventDefault();

		const url = "/api/login";
		const data = {
			Per_Email: email,
			Per_MDP: password
		};

		const JSONdata = JSON.stringify(data)

		const option = {
			method: 'POST',
			headers: {
				'Accept': "application/json",
				"Content-Type": "application/json",
			},
			body: JSONdata
		};

		try {
			const response = await fetch(url, option);

			if (!response.ok) {
				const err = await response.text();
				throw new Error(err);
			}

			const usable = await response.json();

			//console.log("API response data", usable);

			if (response.status === 200) {
				const token = usable.data.token;
				const perm = usable.data.user.Per_Permission;
				const userId = usable.data.user.Per_Personne_id;

				if (typeof window) {
					if (localStorage !== undefined) {
						localStorage.setItem('token', token);
					}
				}

				if (perm === 2) {
					await router.push("/admin/cm-create-form.js");
				} else if (perm === 1) {
					await router.push(`/provider/index.js`);
				} else {
					await router.push(`/customer/${userId}`);
				}
			} else {
				console.error("Une erreur est survenue lors de la connexion");
			}
		} catch (error) {
			console.error("Une erreur est survenue lors de la connexion", error);
		}
	};

	return (
		<>
			<section>
				<div className='cm-auth-bg cm-auth-bg-random'></div>
				<div className='container min-vh-100'>
					<div className='row min-vh-100'>
						<div
							id='login'
							className='cm-theme-bg cm-theme-text rounded my-5 align-self-center col-10 offset-1 col-md-6 offset-md-3'
						>
							<div className='container pt-5 pb-3 d-flex flex-column align-items-center justify-content-around'>
								<div className='row pb-3'>
									<Link href='/admin/index.js'>
										<Image
											src='/logo_cook_master.png'
											alt='cook-master logo'
											className='cm-logo-auth'
											width='90'
											height='96'
										/>
									</Link>
								</div>
								<div className='row'>
									<h2>Se connecter</h2>
								</div>
								<div>
									<form onSubmit={submitForm}>
										<label htmlFor='email'>Adresse E-mail :</label>
										<input
											id='email'
											className='form-control cm-form-orange'
											type='email'
											required='required'
											onChange={(event) => setEmail(event.target.value)}
										/>
										<label htmlFor='mdp'>Mot de passe :</label>
										<input
											id='mdp'
											className='form-control cm-form-orange'
											type='password'
											required='required'
											onChange={(event) => setPassword(event.target.value)}
										/>
										<button
											id='ns-forget-password'
											type='button'
											className='btn '
										>
											Mot de passe oublié ?
										</button>
										<button
											className='form-control cm-form-orange w-100 w-md-50 mx-auto mt-4'
											type='submit'
										>
											Se connecter
										</button>
									</form>
								</div>
								<div className='row'>
									<p>
										Nouveau chez Cook Master ?
										<Link
											href='/auth/register'
											className='btn btn-sm cm-orange-button'
										>
											S&apos;inscrire
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
