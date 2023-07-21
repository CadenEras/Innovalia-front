/**@format*/

import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import FormationCard from "@/components/cm-formation/formationCard";


export default function cmFormationItem({ formation }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();

	if (router.isFallback) {
		return <div>Chargement...</div>;
	}

	return (
		<Layout>
			{/*<h1>{formation.title}</h1>*/}
			{/*<FormationCard />*/}
		</Layout>
	);
}

/*export async function getStaticPaths() {
	const res = await fetch("http://51.77.213.191:8000/api/formations");
	const formations = await res.json();

	const paths = formations.map((formation) => ({
		params: { id: formation.id.toString() },
	}));

	return { paths, fallback: true };
}*/

/*export async function getStaticProps({ params }) {
	const res = await fetch(
		`http://51.77.213.191:8000/api/formations/${params.id}`
	);
	const formation = await res.json();

	return {
		props: {
			formation,
		},
		revalidate: 1,
	};
}*/
