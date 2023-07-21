/**@format*/

import React from "react";
import Layout from "@/components/layout";
import { loadStripe } from "@stripe/stripe-js";

function PricingPage() {
	return (
		<div className='container py-3'>
			<div className='p-3 pb-md-4 mx-auto text-center'>
				<h1 className='display-4 fw-normal'>Nos Offres</h1>
				<p className='fs-5'>Choisissez l&apos;offre qui vous convient le mieux.</p>
			</div>
			<div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
				<div className='col'>
					<div className='card mb-4 rounded-3 shadow-sm'>
						<div className='card-header py-3'>
							<h4 className='my-0 fw-normal'>Forfait Master</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title'>
								19.00€
								<small>/mois ou 220€/an</small>
							</h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>Commenter, publier des avis</li>
								<li>Accès aux leçons en illimité</li>
							</ul>
							<button type='button' className='cm-btn'>Souscrire</button>
						</div>
					</div>
				</div>
					<div className='col'>
						<div className='card mb-4 rounded-3 shadow-sm'>
							<div className='card-header py-3'>
								<h4 className='my-0 fw-normal'>Forfait Starter</h4>
							</div>
							<div className='card-body'>
								<h1 className='card-title'>
									9,90€
									<small>/mois ou 113€/an</small>
								</h1>
								<ul className='list-unstyled mt-3 mb-4'>
									<li>Commenter, publier des avis</li>
									<li>Accès aux leçons : 5 par jour</li>
								</ul>
								<button type='button' className='cm-btn'>Souscrire</button>
							</div>
						</div>
					</div>
						<div className='col'>
							<div className='card mb-4 rounded-3 shadow-sm'>
								<div className='card-header py-3'>
									<h4 className='my-0 fw-normal'>Forfait Free</h4>
								</div>
								<div className='card-body'>
									<h1 className='card-title'>
										0.00€
									</h1>
									<ul className='list-unstyled mt-3 mb-4'>
										<li>Présence de publicités dans le contenu</li>
										<li>Commenter, publier des avis</li>
									</ul>
									<button type='button' className='cm-btn'>Souscrire</button>
								</div>
							</div>
						</div>
				</div>
			</div>
	);
}

export default PricingPage;
PricingPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
