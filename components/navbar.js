	/**@format*/

	import "bootstrap/dist/css/bootstrap.css";
	import Link from "next/link";
	import Image from "next/image";
	import { useEffect, useState } from "react";
	import Cookies from "js-cookie";
	import { useCookies } from 'react-cookie';

	export default function Navbar({ onLogout }) {
		const [cookies] = useCookies(['token']);
		const [isAuthenticated, setIsAuthenticated] = useState(false);
		const [userId, setUserId] = useState(null);
		const [userPerm, setUserPerm] = useState('');

		useEffect(() => {
			setIsAuthenticated(!!cookies.token);
			setUserPerm(cookies.userPerm);
			// setUserId( /* your function to get userId */);
		}, [cookies.token, cookies.userPerm]);

		let profileLink = `/customer/${userId}`;
		if (userPerm === '2') {
			profileLink = `/admin/index.js`;
		} else if (userPerm === '1') {
			profileLink = `/provider/index.js`;
		}
		return (
			<div>
				<nav className='cm-navbar navbar-expand-xl bg-body'>
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
						<div
							className='collapse navbar-collapse'
							id='navbarTogglerDemo02'
						>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										href='/'
									>
										Accueil
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										href='/lessons'
									>
										Leçons
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										href='/event'
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
									<Link
										className='nav-link active'
										aria-current='page'
										href='/'
									>
										Shopping
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link active'
										aria-current='page'
										href='/'
									>
										Chat
									</Link>
								</li>
							</ul>
						</div>
						<div className='cm-d-none-lg'>
							{isAuthenticated ? (
								<>
									<Link
										className='cm-link-nav nav-link'
										onClick={() => {
											Cookies.remove('token');
											setIsAuthenticated(false);
										}}
										href='/'
									>
										Déconnexion
									</Link>
									<Link className='d-inline' href={profileLink}>
										<Image
											src='/default_profil_pict.png'
											id='cm-header-profile-picture'
											alt='profilePhoto'
											className='cm-avatar img-responsive'
											width='32'
											height='32'
										/>
									</Link>
								</>
							) : (
								<>
									<Link
										className='cm-link-nav nav-link'
										href='/auth/login'
									>
										Connexion
									</Link>
									<Link
										className='cm-link-nav nav-link'
										href='/auth/register'
									>
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
