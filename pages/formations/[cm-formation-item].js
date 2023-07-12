import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import FormationCard from "@/components/cm-formation/formationCard";

const stripePromise = loadStripe('pk_test_51NKml4AnSnFZrpbO3zbvhROlQYAawzqbnSKwpIQrcdll4HVrsS9XV43fKsXUqZR2FLj9hiuPvpOxFyvomrdK729n00LAXKRcyg')

export default function cmFormationItem({ formation }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter()

	if (router.isFallback) {
		return <div>Chargement...</div>
	}

	async function handlePayment() {
		const stripe = await stripePromise

		// Créez une nouvelle session de paiement en utilisant votre API backend.
		const response = await fetch('/api/create-checkout-session', { method: 'POST' })
		const session = await response.json()

		const result = await stripe.redirectToCheckout({
			sessionId: session.id
		})

		if (result.error) {
			alert(result.error.message)
		}
	}

	return (
		<Layout>
			<h1>{formation.title}</h1>
			<FormationCard>
			</FormationCard>
		</Layout>
	)
}

export async function getStaticPaths() {
	const res = await fetch('http://51.77.213.191:8000/api/formations')
	const formations = await res.json()

	const paths = formations.map((formation) => ({
		params: { id: formation.id.toString() },
	}))

	return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://51.77.213.191:8000/api/formations/${params.id}`)
	const formation = await res.json()

	return {
		props: {
			formation,
		},
		revalidate: 1,
	}
}
