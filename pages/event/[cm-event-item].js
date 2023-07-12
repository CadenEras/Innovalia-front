import { useRouter } from 'next/router'
import Layout from '@/components/layout'

// Données en dur pour l'exemple
const eventData = [
	{
		id: '1',
		title: 'Atelier Cuisine Méditerranéenne',
		image: '/Asset 1.png',
		description: "Découvrez les délices de la cuisine méditerranéenne lors de cet atelier inoubliable.",
		location: 'Paris',
		price: '$50',
		date: '2023-05-20',
	},
	{
		id: '2',
		title: 'Atelier Cuisine Italienne',
		image: '/Asset 2.png',
		description: "Découvrez les délices de la cuisine italienne lors de cet atelier inoubliable.",
		location: 'Lyon',
		price: '$60',
		date: '2023-06-25',
	},
	// Plus de données si nécessaire
]

export default function EventDetails() {
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	const { id } = router.query
	const event = eventData.find(data => data.id === id)

	return (
		<Layout>
			<div className="event-details">
				<h1>{event.title}</h1>
				<img src={event.image} alt={event.title} />
				<p>{event.description}</p>
				<p>Location: {event.location}</p>
				<p>Prix: {event.price}</p>
				<p>Date: {event.date}</p>
				<button onClick={handlePayment}>Payer maintenant</button>
			</div>
		</Layout>
	)
}

function handlePayment() {
	// Ici, vous pouvez intégrer votre logique de paiement avec Stripe.
}
