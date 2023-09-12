/**@format*/

import React from "react";
import Layout from "../components/layout.js";
import Image from "next/image";
import ActivityGrid from "@/components/activity.js";

const LessonsPage = () => {
	// Ateliers sur site
	const leconsEnLigne = [
		{
			title: "Leçon de Cuisine Italienne",
			image: "/decoupe.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/decoupe.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/decoupe.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 8.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 9.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 10.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 10.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 10.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 10.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		{
			title: "Leçon de Cuisine Italienne",
			image: "/Asset 10.png",
			description:
				"Apprenez à préparer de délicieux plats italiens dans le confort de votre foyer.",
			location: "En ligne",
			price: "$30",
			date: "2023-05-25",
		},
		// Ajoutez d'autres leçons en ligne ici
	];

	const temoignages = [
		{
			nom: "Harry Potter",
			photo: "/pexels.jpg",
			message:
				"Les leçons de cuisine étaient incroyables ! J'ai appris de nouvelles techniques et préparé des plats délicieux. Hautement recommandé.",
			ville: "Paris",
		},
		{
			nom: "Hermione Granger ",
			photo: "/pexels-elle-hughes-2696064.jpg",
			message:
				"Les leçons de cuisine étaient incroyables ! J'ai appris de nouvelles techniques et préparé des plats délicieux. Hautement recommandé.",
			ville: "Paris",
		},
		{
			nom: "Ronald Wisley",
			photo: "/pexels-elle-hughes-2696064.jpg",
			message:
				"Les leçons de cuisine étaient incroyables ! J'ai appris de nouvelles techniques et préparé des plats délicieux. Hautement recommandé.",
			ville: "Paris",
		},
		// Ajoutez d'autres témoignages ici
	];

	return (
		<Layout>
			<main>
				{/* En-tête de la page */}
				<header className='cm-header'>
					<div className='cm-header-lessons-container'>
						<div>
							<em>Atelier culinaire </em>
						</div>
					</div>
				</header>
				{/* Section des leçons de cuisine en ligne */}
				<section className='cm-cooking-lesson-section' id='cooking-lesson'>
					<div className='container'>
						<div className='text-center'>
							<h2 className='cm-title-section'>Leçons de cuisine en ligne</h2>
							<h3 className='description-section'>
								Apprenez à cuisiner en ligne avec nos chefs experts.
							</h3>
						</div>
						<ActivityGrid activities={leconsEnLigne} />
					</div>
				</section>
				{/* Section des témoignages */}
				<section className='cm-testimonials-section' id='temoignages'>
					<div className='container'>
						<h2 className='cm-title-section'>Témoignages</h2>
						<div className='cm-testimonials-grid'>
							{temoignages.map((temoignage, index) => (
								<div className='cm-testimonial' key={index}>
									<Image
										src={temoignage.photo}
										alt={temoignage.nom}
										className='cm-testimonial-photo'
										width={100}
										height={100}
									/>
									<h3 className='cm-testimonial-name'>{temoignage.nom}</h3>
									<p className='cm-testimonial-message'>{temoignage.message}</p>
									{temoignage.ville && (
										<p className='cm-testimonial-city'>{temoignage.ville}</p>
									)}
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default LessonsPage;
