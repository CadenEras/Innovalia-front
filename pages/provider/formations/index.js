/**@format*/

import React, { useEffect, useState } from "react";
import FormationCardAdmin from "@/components/cm-admin/FormationcardAdmin";
import Pagination from "@/components/Pagination";
import { useSession } from "next-auth/react";
import Layout from "@/components/layout";

const FormationList = () => {
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

					const url = "/api/provider/formations/indexage";
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

	if (isLoading) return (<p>Loading...</p>)
	if (formations.length === 0) return <p>No data</p>;

	return (
		<Layout>
			<div>
				<h1>Formations</h1>
				<div className='formation-grid'>
					{formations.map((formation) => (
						<FormationCardAdmin key={formation.For_Formation_id} formation={formation} />
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
