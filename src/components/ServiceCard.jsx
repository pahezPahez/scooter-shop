import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt={service.name} />
        <div className="service-card__text">
          <h3>{service.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;