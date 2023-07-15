/**@format*/

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import axios from "axios";
//import ServiceManagement from '@/components/ServiceManagement';

const ProviderDashboard = () => {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get("/api/me")
			.then((response) => {
				// Vérifier si l'utilisateur est un prestataire
				if (response.data.role === "provider") {
					setUser(response.data);
				} else {
					// Si l'utilisateur n'est pas un prestataire, rediriger vers la page d'accueil
					router.push("/");
				}
			})
			.catch((error) => {
				console.error(
					"Erreur lors de la récupération des informations de l'utilisateur:\n\n",
					error
				);
				// Si une erreur se produit lors de la récupération des informations de l'utilisateur, rediriger vers la page de connexion
				router.push("/login");
			});
	}, [router]);

	if (!user) {
		return null;
	}

	return (
		<Layout>
			<div className='container'>
				<h1>Tableau de bord du prestataire</h1>
				{/*<ServiceManagement />*/}
			</div>
		</Layout>
	);
};

export default ProviderDashboard;
