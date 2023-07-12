import { useEffect, useState } from 'react';
import axios from 'axios';
import FormationCardAdmin  from '@/components/cm-admin/FormationcardAdmin';
import Pagination from "@/components/Pagination";


const FormationList = () => {
	const [formations, setFormations] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const perPage = 16;

	useEffect(() => {
		fetchFormations().then(r => console.log(r));
	}, []);

	const fetchFormations = async () => {
		try {
			const response = await axios.get('/api/admin/dashboard/formations');
			setFormations(response.data);
		} catch (error) {
			console.error('Error fetching formations:', error);
		}
	};
	// Fonction de changement de page
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};


	return (
		<div>
			<h1>Formations</h1>
			<div className="formation-grid">
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
