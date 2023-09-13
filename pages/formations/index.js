/**@format*/

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import FormationCardUser from "@/components/activity";

const Formations = () => {
	const [formations, setFormations] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(false)
	const perPage = 16;

	useEffect(() => {
		const fetchFormations = async () => {
			try {
				const option = {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				};

				const url = "/api/formations/indexeur";
				setLoading(true);
				const response = await fetch(url, option);

				if (response.status !== 200) {
					console.log("Error fetching formations" + await response.json().data);
				} else {
					const usable = await response.json();
					setFormations(usable.data);
					setLoading(false);
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
	if (formations.length === 0) return <p>No data</p>;
	return (
		<Layout>
				{/* Bannière */}
				<header className='cm-masthead'>
					<div className='container'>
						<div className='cm-masthead-subheading'>
							<h1>
								Avec les formations CookMaster, la cuisine ne sera plus un mystère
								pour vous.
							</h1>
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
					<br/>
					<div>
						<div className='formation-grid'>
							{formations.map((formation) => (
								<FormationCardUser key={formation.For_Formation_id} formation={formation} />
							))}
						</div>
						<Pagination
							currentPage={currentPage}
							perPage={perPage}
							totalItems={formations.length}
							onPageChange={handlePageChange}
						/>
					</div>
				</section>
		</Layout>
	);
};


export default Formations;
