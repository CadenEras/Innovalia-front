import React from 'react';
import Layout from "@/components/layout";
import ActivityGrid from "@/components/activity";

// Définition des données pour les ateliers
const ateliers = [
  {
    id: 1,
    title: 'Atelier Cuisine Méditerranéenne',
    image: '/Asset 1.png',
    description: "Découvrez les délices de la cuisine méditerranéenne lors de cet atelier inoubliable.",
    location: 'Paris',
    price: '$50',
    date: '2023-05-20',
  },
  {
    id: 2,
    title: 'Atelier Cuisine Méditerranéenne',
    image: '/Asset 1.png',
    description: "Découvrez les délices de la cuisine méditerranéenne lors de cet atelier inoubliable.",
    location: 'Paris',
    price: '$50',
    date: '2023-05-20',
  },
  {
    id: 3,
    title: 'Atelier Cuisine Méditerranéenne',
    image: '/Asset 1.png',
    description: "Découvrez les délices de la cuisine méditerranéenne lors de cet atelier inoubliable.",
    location: 'Paris',
    price: '$50',
    date: '2023-05-20',
  },
];

// Définition des données pour les événements
const events = [
  {
    id: 1,
    title: 'Dégustation de vins',
    image: '/Asset 2.png',
    description: "Participez à une dégustation de vins sélectionnés avec soin.",
    location: 'Paris',
    price: '$30',
    date: '2023-06-10',
  },
  {
    id: 2,
    title: 'Livraison cuisine italienne',
    image: '/Asset 3.png',
    description: "Profitez d'une délicieuse livraison de cuisine italienne.",
    location: 'Paris',
    price: '$20',
    date: '2023-06-15',
  },
  {
    id: 3,
    title: 'Soirée gastronomique',
    image: '/Asset 4.png',
    description: "Venez à notre soirée gastronomique pour un repas exquis.",
    location: 'Paris',
    price: '$70',
    date: '2023-06-20',
  },
];

// Composant EventPage
const EventPage = () => {
  return (
      <>
        {/* En-tête de la page */}
        <header className="cm-header">
          {/* Contenu de l'en-tête */}
        </header>

        {/* Section des événements */}
        <section className="cm-theme-bg">
          <h2 className="title-section">Voici nos prochains événements :</h2>
          <ActivityGrid activities={events} type="events" />
        </section>

        {/* Section des ateliers sur site */}
        <section className="cm-theme-bg">
          <div className="container">
            <h2 className="title-section" id="atelier-titre">Ateliers sur site</h2>
            <h3 className="description-section">Découvrez nos ateliers pour apprendre à cuisiner de délicieux plats.</h3>
            <ActivityGrid activities={ateliers} type="ateliers" />
          </div>
        </section>
      </>
  );
};

EventPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default EventPage;
