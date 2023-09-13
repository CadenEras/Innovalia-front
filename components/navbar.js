/**@format*/

import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
	const { data: session, status } = useSession()
	const loading = status === "loading"
	const router = useRouter();
	const [profileLink, setProfileLink] = useState(null);

	useEffect(() => {
		if (session?.user) {
			console.log(session.user.userPerm);
			console.log(session.user.userId);
			if (session.user.userPerm === 2) {
				setProfileLink(`/admin/index.js`);
			} else if (session.user.userPerm === 1) {
				setProfileLink(`/provider/profil/${session.user.userId}`);
			} else {
				setProfileLink(`/customer/profil/${session.user.userId}`);
			}
		}
	}, [session]);

	return (
		<div>
			<nav className='cm-navbar navbar-expand-lg bg-body'>
				<div className='container-fluid'>
					<Link className='cm-navbar-brand' href='/'>
						<Image
							src='/logo_cook_master.png'
							alt='logo brand'
							width='45'
							height='45'
						/>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo02'
						aria-controls='navbarTogglerDemo02'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='nav-link active' aria-current='page' href='/'>
									Accueil
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									href='/'
								>
									Leçons
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									href='/'
								>
									Évènements
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									href='/formations'
								>
									Formations
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link active'
									aria-current='page'
									href='/pricing'
								>
									Pricing
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link active' aria-current='page' href='/'>
									Shopping
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link active' aria-current='page' href='/'>
									Chat
								</Link>
							</li>
						</ul>
					</div>
					<div className='cm-d-none-lg'>
						{session?.user && (
							<>
								<Link
									className='cm-link-nav nav-link'
									onClick={() => {signOut({callbackUrl: '/'})}}
									href='/'
								>
									Déconnexion
								</Link>
								{profileLink && (
									<Link href={`${profileLink}`}>
											<Image
												src='/default_profil_pict.png'
												id='cm-header-profile-picture'
												alt='profilePhoto'
												className='cm-avatar img-responsive'
												width='32'
												height='32'
											/>
									</Link>
								)}
							</>
						)}
						{!session && (
							<>
								<Link className='cm-link-nav nav-link' href='/auth/login' >
									Connexion
								</Link>
								<Link className='cm-link-nav nav-link' href='/auth/register'>
									Créer un compte
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
			<div className='container-fluid cm-orange-bg' />
		</div>
	);
}
