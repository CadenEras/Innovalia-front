/**@format*/

import React from "react";
import Layout from "@/components/layout";
import { loadStripe } from "@stripe/stripe-js";

// Assurez-vous d'utiliser votre propre clé public de Stripe
const stripePromise = loadStripe(
	"pk_test_51NKml4AnSnFZrpbO3zbvhROlQYAawzqbnSKwpIQrcdll4HVrsS9XV43fKsXUqZR2FLj9hiuPvpOxFyvomrdK729n00LAXKRcyg"
);

async function handleSubscribe(planId) {
	const stripe = await stripePromise;

	const response = await fetch("/api/create-checkout-session", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ planId }),
	});

	const session = await response.json();

	const result = await stripe.redirectToCheckout({
		sessionId: session.id,
	});

	if (result.error) {
		alert(result.error.message);
	}
}

function PricingPage() {
	return (
		<div>
			<h1>Nos Offres</h1>
			<p>Choisissez offre qui vous convient le mieux</p>

			<div>
				<h2>Forfait Master</h2>
				<p>19€ / mois ou 220€ / an</p>
				<ul>
					<li>Commenter, publier des avis</li>
					<li>Accès aux leçons en illimité</li>
				</ul>
				<button onClick={() => handleSubscribe("master")}>Souscrire</button>
			</div>

			<div>
				<h2>Forfait Starter</h2>
				<p>9,90€ / mois ou 113€ / an</p>
				<ul>
					<li>Commenter, publier des avis</li>
					<li>Accès aux leçons : 5 par jour</li>
				</ul>
				<button onClick={() => handleSubscribe("starter")}>Souscrire</button>
			</div>

			<div>
				<h2>Forfait Free</h2>
				<p>Gratuit</p>
				<ul>
					<li>Présence de publicités dans le contenu</li>
					<li>Commenter, publier des avis</li>
				</ul>
				<button onClick={() => handleSubscribe("free")}>Souscrire</button>
			</div>
		</div>
	);
}

export default PricingPage;
PricingPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
