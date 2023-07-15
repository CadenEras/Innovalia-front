/**@format*/

import Link from "next/link";
import React from "react";

const footerLinks = [
	{ title: "Abonnements", href: "#" },
	{ title: "Leçons", href: "#" },
	{ title: "Évènements", href: "#" },
	{ title: "Formations", href: "#" },
	{ title: "Shopping", href: "#" },
	{ title: "Chat", href: "#" },
];

const socialLinks = [
	{ icon: "#twitter", href: "#" },
	{ icon: "#instagram", href: "#" },
	{ icon: "#facebook", href: "#" },
];

function FooterLink({ title, href }) {
	return (
		<li className='nav-item mb-2'>
			<Link href={href} className='nav-link p-0 text-body-secondary'>
				{title}
			</Link>
		</li>
	);
}

function SocialLink({ icon, href }) {
	return (
		<li className='ms-3'>
			<Link className='link-body-emphasis' href={href}>
				<svg className='bi' width='24' height='24'>
					<use xlinkHref={icon} />
				</svg>
			</Link>
		</li>
	);
}

export default function Footer() {
	return (
		<div className='pt-5'>
			<footer className='py-5'>
				<div className='row'>
					<div className='container-fluid'>
						<h5>Nos Services</h5>
						<ul className='nav flex-column'>
							{footerLinks.map((link) => (
								<FooterLink {...link} key={link.title} />
							))}
						</ul>
					</div>
					<div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
						<p>
							&copy; 2023 Innovalia pour Cook-Master. Tous les droits réservés.
						</p>
						<ul className='list-unstyled d-flex'>
							{socialLinks.map((link) => (
								<SocialLink {...link} key={link.icon} />
							))}
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
