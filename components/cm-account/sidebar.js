/**@format*/

import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ onLinkClick }) => {
	const router = useRouter();
	const { pathname } = router;

	const handleClick = (page) => {
		onLinkClick(page);
	};

	return (
		<div className='p-3 py-5' style={{
			position: "fixed",
		}}>
			<div className='col-md-12'>
				<button
					onClick={() => router.push("/customer/orders/")}
					className='cm-orange-button cm-btn'
				>
					Mes formations
				</button>
			</div>
			<br />
			<div className='col-md-12'>
				<button
					onClick={() => router.push("/")}
					className='cm-orange-button cm-btn'
				>
					Mes événements
				</button>
			</div>
			<br />
			<div className='col-md-12'>
				<button
					onClick={() => router.push("/")}
					className='cm-orange-button cm-btn'
				>
					Facturation
				</button>
			</div>
			<br />
			<div className='col-md-12'>
				<button
					onClick={() => router.push("/")}
					className='cm-orange-button cm-btn'
				>
					Mes favoris
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
