import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const ActivityGrid = ({ activities, type }) => {
    return (
        <div className="activity-grid">
            {activities.map((activity, index) => (
                <div className="activity-item" key={index}>
                    <Image
                        className="activity-image"
                        src={activity.image}
                        width={240}
                        height={240}
                        alt={activity.title}
                    />
                    <div className="cm-activity-details">
                        <h3 className="activity-title">{activity.title}</h3>
                        <p className="activity-description">{activity.description}</p>
                        <p className="activity-location">Lieu : {activity.location}</p>
                        <p className="activity-price">Prix : {activity.price}</p>
                        <p className="activity-date">Date : {activity.date}</p>
                        <Link href={`/${type}/${activity.id}`}><Button>En savoir plus</Button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ActivityGrid;
