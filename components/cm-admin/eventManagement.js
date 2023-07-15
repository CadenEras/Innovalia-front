/**@format*/

import React, { useEffect, useState } from "react";
import axios from "axios";

function EventManagement() {
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);

	// Fetch events when component mounts
	useEffect(() => {
		axios
			.get("/api/event")
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.error("Error fetching events", error);
			});
	}, []);

	const handleEventSelect = (id) => {
		axios
			.get(`/api/event/${id}`)
			.then((response) => {
				setSelectedEvent(response.data);
			})
			.catch((error) => {
				console.error("Error fetching event", error);
			});
	};

	const handleEventUpdate = (id, updatedEvent) => {
		axios
			.put(`/api/event/${id}`, updatedEvent)
			.then((response) => {
				// Update the events state with the updated event
				setEvents(
					events.map((event) => (event.id === id ? response.data : event))
				);
			})
			.catch((error) => {
				console.error("Error updating event", error);
			});
	};

	const handleEventCreate = (newEvent) => {
		axios
			.post("/api/event", newEvent)
			.then((response) => {
				// Add the new event to the events state
				setEvents([...events, response.data]);
			})
			.catch((error) => {
				console.error("Error creating event", error);
			});
	};

	const handleEventDelete = (id) => {
		axios
			.post(`/api/event/${id}`)
			.then(() => {
				// Remove the deleted event from the events state
				setEvents(events.filter((event) => event.id !== id));
			})
			.catch((error) => {
				console.error("Error deleting event", error);
			});
	};

	// Render logic here. It could include a form for creating/updating events, a list of events, etc.
	return (
		<div>
			{/* Event management UI here */}
			<h1>Event Management</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name='Eve_Intitule'
					ref={register({ required: true, maxLength: 50 })}
					placeholder='Event Title'
				/>
				{errors.Eve_Intitule && <p>This field is required</p>}
				<input
					name='Eve_Description'
					ref={register({ maxLength: 150 })}
					placeholder='Description'
				/>
				{errors.Eve_Description && <p>Description is too long</p>}
				<input
					name='Eve_Dte_Debut'
					type='datetime-local'
					ref={register({ required: true })}
					placeholder='Start Date'
				/>
				{errors.Eve_Dte_Debut && <p>This field is required</p>}
				<input
					name='Eve_Dte_Fin'
					type='datetime-local'
					ref={register({ required: true })}
					placeholder='End Date'
				/>
				{errors.Eve_Dte_Fin && <p>This field is required</p>}
				<input
					name='Eve_Nb_Participant_Max'
					type='number'
					ref={register({ required: true })}
					placeholder='Max Participants'
				/>
				{errors.Eve_Nb_Participant_Max && <p>This field is required</p>}
				<input
					name='Eve_Montant_HT'
					type='number'
					step='0.0001'
					ref={register({ required: true })}
					placeholder='Amount HT'
				/>
				{errors.Eve_Montant_HT && <p>This field is required</p>}
				<input
					name='Eve_Montant_TTC'
					type='number'
					step='0.0001'
					ref={register({ required: true })}
					placeholder='Amount TTC'
				/>
				{errors.Eve_Montant_TTC && <p>This field is required</p>}
				<input
					name='Adr_Adresse_id'
					type='number'
					ref={register({ required: true })}
					placeholder='Address ID'
				/>
				{errors.Adr_Adresse_id && <p>This field is required</p>}
				<input type='submit' />
			</form>
			<ul>
				{events.map((event) => (
					<li key={event.Eve_Intitule}>
						{event.Eve_Intitule}
						<button onClick={() => handleEventSelect(event.Eve_Intitule)}>
							Edit
						</button>
						<button onClick={() => handleEventDelete(event.Eve_Intitule)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default EventManagement;
