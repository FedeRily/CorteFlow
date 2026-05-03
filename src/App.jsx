import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import BookingModal from './components/BookingModal';
import GeminiChatbot from './components/GeminiChatbot';

const SERVICES = [
  {
    id: 1,
    title: 'Corte Clásico',
    price: 8000,
    description: 'Corte tradicional o moderno a tijera y máquina. Incluye lavado y peinado final.'
  },
  {
    id: 2,
    title: 'Barba y Pelo',
    price: 12000,
    description: 'Servicio completo. Corte de pelo más perfilado y recorte de barba con toalla caliente.'
  },
  {
    id: 3,
    title: 'Tratamiento Premium',
    price: 18000,
    description: 'Corte de pelo, arreglo de barba, limpieza facial profunda, mascarilla y masaje capilar.'
  }
];

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [apiKey, setApiKey] = useState('');

  // Load appointments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('serviceflow_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save appointments to localStorage
  useEffect(() => {
    localStorage.setItem('serviceflow_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleReserve = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <Scissors size={28} />
            ServiceFlow
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Tu mejor estilo, sin complicaciones</h1>
          <p>Experimentá un servicio de primera clase en nuestra peluquería moderna. Reserva tu turno online en segundos.</p>
        </section>

        <section className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              onReserve={() => handleReserve(service)}
            />
          ))}
        </section>
      </main>

      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={handleCloseModal}
          appointments={appointments}
          addAppointment={addAppointment}
        />
      )}

      <GeminiChatbot apiKey={apiKey} />
    </>
  );
}

export default App;
