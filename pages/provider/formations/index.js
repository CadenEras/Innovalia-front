/**@format*/

import React, { useEffect, useState } from "react";
import FormationCardAdmin from "@/components/cm-admin/FormationcardAdmin";
import Pagination from "@/components/Pagination";

const FormationList = () => {
	const [formations, setFormations] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(false)
	const perPage = 16;

	useEffect(() => {
		const token = localStorage.getItem('token');
		const fetchFormations = async () => {
			try {
				const option = {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization : `Bearer ` + token,
					},
				};

				const url = "/api/provider/formations/indexage";

				setLoading(true);

				const response = await fetch(url, option);

				if (response.status !== 200) {
					return (response)
				} else {
					const usable = await response.json();
					setFormations(response.data);
					setLoading(false);
					console.log(usable)
				}

			} catch (error) {
				console.error("Error fetching formations:", error);
			}
		};

		fetchFormations()
	}, []);


	// Fonction de changement de page
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (isLoading) return (<p>Loading...</p>)
	if (!formations) return (<p>No data</p>)

	return (
		<div>
			<h1>Formations</h1>
			<div className='formation-grid'>
				{formations.map((formation) => (
					<FormationCardAdmin key={formation.id} formation={formation} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				perPage={perPage}
				totalItems={formations.id}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default FormationList;
