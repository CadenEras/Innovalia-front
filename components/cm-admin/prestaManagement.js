/**@format*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const PrestataireTypeManagement = () => {
	const { register, handleSubmit, reset } = useForm();
	const [prestaTypes, setPrestaTypes] = useState([]);
	const [selectedType, setSelectedType] = useState(null);

	useEffect(() => {
		fetchPrestaTypes();
	}, []);

	const fetchPrestaTypes = async () => {
		const res = await axios.get("/api/prestataires/type");
		setPrestaTypes(res.data);
	};

	const onSubmit = async (data) => {
		if (selectedType) {
			await axios.put(`/api/prestataires/type/${selectedType}`, data);
		} else {
			await axios.post("/api/prestataires/type", data);
		}
		reset();
		setSelectedType(null);
		await fetchPrestaTypes();
	};

	const handleTypeSelect = (id) => {
		const type = prestaTypes.find((type) => type.id === id);
		setSelectedType(type.id);
		reset(type);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Nom du Type de Prestataire
					<input {...register("name", { required: true })} />
				</label>
				<button type='submit'>
					{selectedType ? "Mettre à jour" : "Créer"}
				</button>
			</form>
			{prestaTypes.map((type) => (
				<div key={type.id}>
					<span>{type.name}</span>
					<button onClick={() => handleTypeSelect(type.id)}>Modifier</button>
				</div>
			))}
		</div>
	);
};

export default PrestataireTypeManagement;
