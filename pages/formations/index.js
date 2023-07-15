/**@format*/

import React from "react";
import axios from "axios";
import Layout from "@/components/layout";
import ActivityGrid from "@/components/activity";
import Link from "next/link";

const Formations = ({ formations }) => {
	return (
		<main>
			{/* Bannière */}
			<header className='cm-masthead'>
				<div className='container'>
					<div className='cm-masthead-subheading'>
						Avec les formations CookMaster, la cuisine ne sera plus un mystère
						pour vous.
					</div>
					<Link
						className='cm-orange-button cm-btn btn-xl text-uppercase'
						href='/auth/register'
					>
						Essaie gratuit
					</Link>
				</div>
			</header>

			<section className={"cm-formation-body"}>
				<h2>Formations</h2>
				<ActivityGrid activities={formations} type='formations' />
			</section>
		</main>
	);
};

export async function getServerSideProps(context) {
	const res = await axios.get("http://51.77.213.191:8000/api/formations");
	// Si aucune formation n'est trouvée, renvoyer une erreur 404
	if (!res.data) {
		return {
			notFound: true,
		};
	}
	const formations = res.data.map((item) => {
		return {
			id: item.id,
			title: item.title,
			description: item.body,
			// Add other fields as needed
		};
	});

	return {
		props: { formations }, // will be passed to the page component as props
	};
}

Formations.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Formations;
