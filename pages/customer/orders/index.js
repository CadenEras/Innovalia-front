/**@format*/

import React, { useEffect, useState } from "react";
import FormationCardAdmin from "@/components/cm-admin/FormationcardAdmin";
import Pagination from "@/components/Pagination";
import { useSession } from "next-auth/react";
import Layout from "@/components/layout";
import orderUser from "@/components/order";
import OrderUser from "@/components/order";
import Link from "next/link";
import { router } from "next/client";

const FormationList = () => {
	const [error, setError] = useState("");
	const [formations, setFormations] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(false)
	const { data: session, status } = useSession();
	const perPage = 16;

	useEffect(() => {
		const fetchFormations = async () => {
			if (status === "authenticated") {
				try {
					const token = session?.user?.accessToken;
					console.log("Token in create form:", token);
					const option = {
						method: "GET",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization : `Bearer ` + token,
						},
					};

					const url = "/api/customer/order/indexage";
					setLoading(true);
					const response = await fetch(url, option);

					if (response.status !== 200) {
						console.log("Error fetching formations" + await response.json());
					} else {
						const usable = await response.json();
						setFormations(usable.data);
						setLoading(false);
						console.log(usable)
					}
				} catch (error) {
					console.error("Error fetching formations:", error);
				}
			}
		};
		fetchFormations()
	}, [session, status]);

// Fonction de changement de page
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleUnSubscribe = async (formations) => {
		if(status === "authenticated"){
			const token = session?.user?.accessToken;
			try {
				const option = {
					method: 'POST',
					headers: {
						'Accept': "application/json",
						"Content-Type": "application/json",
						Authorization : `Bearer ` + token
					}
				};
				await fetch(`/api/formations/booking/unbook/${formations.reservation.Com_Commande_id}/`, option)
					.then(async (response) => {
						const usable = await response.json();
						console.log("Response in create form:", usable);
						if (response.status === 200) {
							return router.push("/customer/orders/");
						}
						console.error("Une erreur est survenue lors de la désinscription.");
						setError(
							usable.data ||
							"Une erreur est survenue lors de la désinscription."
						);
					})
			} catch (error) {
				console.error("Erreur lors de la désinscription :", error);
			}
		}
	};

	if (isLoading) return (<p>Loading...</p>)
	if (formations.length === 0) return <p>No data</p>;
	console.log("map : ", formations.map( (formation) => formation.reservation))

	return (
		<Layout>
			<div>
				<h1>Vos formations souscrites :</h1>
				<div className='formation-grid'>
					{formations.map((formation) => (
						<div key={formation.reservation.Res_Reservation_id}>
							<h4>{formation.reservation.Res_Inttitule}</h4>
							<p>Date de début de la formation : {formation.reservation.Res_Dte_Debut}</p>
							<p>Date de fin de la formation : {formation.reservation.Res_Dte_Fin}</p>
							{session && (
								<button onClick={() => handleUnSubscribe(formation)}>Se désinscrire</button>
							)}
						</div>
					))}
				</div>
				<Pagination
					currentPage={currentPage}
					perPage={perPage}
					totalItems={formations.length}
					onPageChange={handlePageChange}
				/>
			</div>
		</Layout>

	);
};

export default FormationList;
