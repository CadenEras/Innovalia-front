/**@format*/

import React, { useState, useEffect } from "react";

function FormationManagement() {
	const [formations, setFormations] = useState([]);
	const [form, setForm] = useState({ title: "", type: "", description: "" });

	useEffect(() => {
		fetch("https://51.77.213.191:8000/api/formations")
			.then((response) => response.json())
			.then((data) => setFormations(data));
	}, []);

	const createFormation = (event) => {
		event.preventDefault();
		fetch("https://51.77.213.191:8000/api/formations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		})
			.then((response) => response.json())
			.then((data) =>
				setFormations((prevFormations) => [...prevFormations, data])
			);
	};

	const updateFormation = (id, updatedFormation) => {
		fetch(`https://51.77.213.191:8000/api/formations/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedFormation),
		})
			.then((response) => response.json())
			.then((data) => {
				setFormations((prevFormations) =>
					prevFormations.map((formation) =>
						formation.id === id ? data : formation
					)
				);
			});
	};

	const deleteFormation = (id) => {
		fetch(`https://51.77.213.191:8000/api/formations/${id}`, {
			method: "POST",
		}).then(() => {
			setFormations((prevFormations) =>
				prevFormations.filter((formation) => formation.id !== id)
			);
		});
	};

	return (
		<div>
			<h1>Formation Management</h1>
			<form onSubmit={createFormation}>
				<input
					type='text'
					placeholder='Title'
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>
				<input
					type='text'
					placeholder='Type'
					onChange={(e) => setForm({ ...form, type: e.target.value })}
				/>
				<input
					type='text'
					placeholder='Description'
					onChange={(e) => setForm({ ...form, description: e.target.value })}
				/>
				<button type='submit'>Create Formation</button>
			</form>
			{formations.map((formation) => (
				<div key={formation.id}>
					<h2>{formation.title}</h2>
					<p>{formation.type}</p>
					<p>{formation.description}</p>
					<button onClick={() => updateFormation(formation.id, form)}>
						Update
					</button>
					<button onClick={() => deleteFormation(formation.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}

export default FormationManagement;
