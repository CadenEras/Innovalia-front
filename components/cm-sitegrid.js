import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const SiteGrid = ({ sites }) => {
	return (
		<div className="cm-site-grid">
			{sites.map((site) => (
				<div className="cm-site" key={site.id}>
					<div className="cm-site-image">
						<Image src={site.img} alt={site.Sit_Intitule} width={240} height={240} />
					</div>
					<div className="cm-site-details">
						<h3 className="cm-site-title">{site.Sit_Intitule}</h3>
						<p className="cm-site-text">Nombre de salles max : {site.Sit_Nombre_Salles_Max}</p>
						<p className="cm-site-text">Horraire : {site.Sit_Heure_Ouverture} à {site.Sit_Heure_Fermeture}</p>

						<Link href="/">En savoir plus</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default SiteGrid;
