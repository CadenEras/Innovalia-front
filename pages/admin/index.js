/**@format*/

import React from "react";
import SidebarAdmin from "@/components/cm-admin/SidebarAdmin";

const AdminDashboard = () => {
	return (
		<main>
			<div className='container-fluid'>
				<div className='row'>
					<section className='col-12 col-md-3'>
						<div className='col-2'>
							<SidebarAdmin />
						</div>
						<div className='container-fluid' />
					</section>
				</div>
			</div>
		</main>
	);
};

export default AdminDashboard;
