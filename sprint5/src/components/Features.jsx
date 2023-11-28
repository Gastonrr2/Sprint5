import React from 'react';
import './features.css';
import featuresData from './features.json';

function Features() {
    return (
        <div className="features">
            {featuresData.map((feature) => (
                <div className="feature-item">
                    <img src={feature.image} alt={feature.title} />
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Features;