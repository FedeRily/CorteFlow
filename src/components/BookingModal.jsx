import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function BookingModal({ service, onClose, appointments, addAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // Check collision
    const isConflict = appointments.some(
      (app) => app.date === formData.date && app.time === formData.time
    );

    if (isConflict) {
      setError('Ese horario ya está reservado. Por favor, elige otro.');
      return;
    }

    addAppointment({ ...formData, service: service.title });
    setSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          <X size={24} />
        </button>
        <h2 className="modal-title">Reservar: {service.title}</h2>
        
        {success ? (
          <div className="success-message">
            ¡Turno reservado con éxito! Te esperamos.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej. 11 1234 5678"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Fecha</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Hora</label>
              <input
                type="time"
                name="time"
                className="form-control"
                value={formData.time}
                onChange={handleChange}
                min="09:00"
                max="20:00"
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="btn">
                Confirmar Reserva
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
