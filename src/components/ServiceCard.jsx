import React from 'react';
import { Calendar } from 'lucide-react';

export default function ServiceCard({ title, price, description, onReserve }) {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <div className="service-price">ARS {price}</div>
      <p className="service-description">{description}</p>
      <button className="btn" onClick={onReserve}>
        <Calendar size={16} />
        Reservar
      </button>
    </div>
  );
}
