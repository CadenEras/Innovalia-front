/**@format*/

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const SidebarAdmin = () => {
	const [activeList, setActiveList] = useState(null);

	const toggleList = (listName) => {
		if (activeList === listName) {
			setActiveList(null);
		} else {
			setActiveList(listName);
		}
	};

	return (
		<div
			style={{
				width: "250px",
				height: "50vh",
				backgroundColor: "#f5f5f5",
				position: "fixed",
			}}
		>
			<Link className='cm-navbar-brand pb-5 pt-5' href='/'>
				<Image
					src='/../public/logo_cook_master.png'
					alt='logo brand'
					width='120'
					height='120'
				/>
			</Link>
			<h3>Dashboard</h3>
			<ul style={{ listStyleType: "none", padding: 0 }}>
				<li style={{ padding: "10px 0" }}>
					<Button onClick={() => toggleList("formations")}>
						Vos formations
					</Button>
					{activeList === "formations" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/provider/formations/cm-create-form'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Créer formation
								</Link>
							</li>
							<li>
								<Link
									href='/provider/formations/'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Liste des formations
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li style={{ padding: "10px 0" }}>
					<Button
						className='nav-link active'
						onClick={() => toggleList("events")}
					>
						Évènements
					</Button>
					{activeList === "events" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/provider/'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Créer évènement
								</Link>
							</li>
							<li>
								<Link
									href='/provider/'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Liste des évènements
								</Link>
							</li>
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default SidebarAdmin;
