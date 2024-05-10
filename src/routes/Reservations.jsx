import React from 'react';
import { ReservationForm } from '../components/ReservationForm';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const Reservations = () => {
    return (
        <div className="wrapper">
        <NavBar />
        <div className="body-wrapper reservation-body">
            <ReservationForm />
        </div>
        <Footer />
        </div>
    )
}

export { Reservations };