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
				height: "100vh",
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
			<h3>Dashboard Admin</h3>
			<ul style={{ listStyleType: "none", padding: 0 }}>
				<li style={{ padding: "10px 0" }}>
					<Button onClick={() => toggleList("formations")}>
						Manage Formations
					</Button>
					{activeList === "formations" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/admin/formations/cm-create-form'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Create Formation
								</Link>
							</li>
							<li>
								<Link
									href='/admin/formations/index'
									className='nav-link active pt-2'
									aria-current='page'
								>
									List Formations
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
						Manage Events
					</Button>
					{activeList === "events" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/admin/events/create'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Create Event
								</Link>
							</li>
							<li>
								<Link
									href='/admin/events/list'
									className='nav-link active pt-2'
									aria-current='page'
								>
									List Events
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li style={{ padding: "10px 0" }}>
					<Button onClick={() => toggleList("subscriptions")}>
						Manage Subscriptions
					</Button>
					{activeList === "subscriptions" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/admin/subscriptions/create'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Create Subscription
								</Link>
							</li>
							<li>
								<Link
									href='/admin/subscriptions/list'
									className='nav-link active pt-2'
									aria-current='page'
								>
									List Subscriptions
								</Link>
							</li>
						</ul>
					)}
				</li>
				<li style={{ padding: "10px 0" }}>
					<Button onClick={() => toggleList("sites")}>Manage Sites</Button>
					{activeList === "sites" && (
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link
									href='/admin/sites/create'
									className='nav-link active pt-2'
									aria-current='page'
								>
									Create Site
								</Link>
							</li>
							<li>
								<Link
									href='/admin/sites/list'
									className='nav-link active pt-2'
									aria-current='page'
								>
									List Site
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
