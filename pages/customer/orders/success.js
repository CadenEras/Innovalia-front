/**@format*/

import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export default function CmFormationItem({ formation }) {
	const router = useRouter();
	const [error, setError] = useState("");
	const { data: session, status } = useSession()
	return (
		<Layout>
			<div>
				<h2>
					Commande effectué avec succès !
				</h2>
				<p>
					Vous pouvez consulter vos commandes dans votre espace personnel.
				</p>
			</div>
		</Layout>
	);
}
