/** @format */

import Image from "next/image";
import Layout from "@/components/layout";
import Link from "next/link";
import events from "@/pages/event";
import { useEffect, useState } from "react";
import axios from "axios";
import SiteGrid from "@/components/cm-sitegrid";

const cm_location = [
	{
		id: "1",
		img: "/Asset 8.png",
		Sit_Intitule: "Paris 2ème",
		Sit_Nombre_Salles_Max: 5,
		Sit_Heure_Ouverture: "09:00",
		Sit_Heure_Fermeture: "18:00",
		Sit_Dte_Creation: "2023-07-10T10:00:00Z",
		Sit_Dte_Last_Modif: "2023-07-10T12:30:00Z",
		Adr_Adresse_id: 1,
	},
	{
		id: "2",
		img: "/Asset 8.png",
		Sit_Intitule: "Paris 3ème",
		Sit_Nombre_Salles_Max: 5,
		Sit_Heure_Ouverture: "09:00",
		Sit_Heure_Fermeture: "18:00",
		Sit_Dte_Creation: "2023-07-10T10:00:00Z",
		Sit_Dte_Last_Modif: "2023-07-10T12:30:00Z",
		Adr_Adresse_id: 2,
	},
	{
		id: "3",
		img: "/Asset 8.png",
		Sit_Intitule: "Paris 4ème",
		Sit_Nombre_Salles_Max: 5,
		Sit_Heure_Ouverture: "09:00",
		Sit_Heure_Fermeture: "18:00",
		Sit_Dte_Creation: "2023-07-10T10:00:00Z",
		Sit_Dte_Last_Modif: "2023-07-10T12:30:00Z",
		Adr_Adresse_id: 3,
	},
	{
		id: "4",
		img: "/Asset 8.png",
		Sit_Intitule: "Paris 12ème",
		Sit_Nombre_Salles_Max: 5,
		Sit_Heure_Ouverture: "09:00",
		Sit_Heure_Fermeture: "18:00",
		Sit_Dte_Creation: "2023-07-10T10:00:00Z",
		Sit_Dte_Last_Modif: "2023-07-10T12:30:00Z",
		Adr_Adresse_id: 4,
	},
];

// Page d'accueil de Cook Master
export default function Home() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Faites une requête GET à votre API pour récupérer la liste des événements
		/*axios
			.get("https:///api/event")
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.error("Erreur lors de la récupération des événements:", error);
			});*/
	}, []);

	return (
		<main>
			{/* Bannière de bienvenue */}
			<header className='cm-masthead'>
				<div className='container'>
					<div className='cm-masthead-subheading'>
						<h1>La cuisine n&apos;aura plus secret pour vous</h1>
					</div>
					<Link
						className='cm-orange-button cm-btn btn-xl text-uppercase'
						href='/pricing'
					>
						Essai gratuit
					</Link>
				</div>
			</header>
			{/* Section de présentation de Cook Master */}
			<section className='cm-presentation-section mt-4 mb-3'>
				<div className='container'>
					<h2 className='mb-3 text-center'>Découvrez votre talent pour la cuisine avec Cook Master !</h2>
					<p className='text-center'>
						Bienvenue sur Cook-Master, votre destination ultime pour explorer le monde culinaire et développer vos compétences en cuisine comme jamais auparavant ! Plongez dans nos formations interactives, conçues par des chefs experts, et découvrez les secrets des recettes les plus délicieuses et des techniques les plus raffinées. Que vous soyez un débutant enthousiaste ou un passionné de longue date, notre plateforme conviviale vous guidera pas à pas vers l&apos;excellence culinaire. Rejoignez-nous dès aujourd&apos;hui et faites de chaque repas un véritable chef-d&apos;œuvre gastronomique !
					</p>
				</div>
			</section>
			{/* Section des événements */}
			<section className='cm-event-section mt-4 mb-3'>
				<div className='container'>
					<h2 className='mb-3'>Événements</h2>
					<div className='cm-event-grid'>
						{/*{events.map((event) => (
							<div className='cm-event' key={event.id}>
								<div className='cm-event-title'>{event.name}</div>
								<div className='cm-event-description'>
									<p>{event.description}</p>
								</div>
								<Link href={`/event/${event.id}`}>Voir les détails</Link>
							</div>
						))}*/}
					</div>
				</div>
			</section>
			{/* Section de présentation de nos sites*/}
			<section className='cm-site-section mt-4 mb-3'>
				<div className='container'>
					<h2 className='mb-3'>Nos sites</h2>
					<SiteGrid sites={cm_location} />
				</div>
			</section>
			{/* Section Nous contacter*/}
		</main>
	);
}

Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
