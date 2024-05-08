import React from 'react';
import { ReservationForm } from '../components/ReservationForm';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const Reservations = () => {
    return (
        <>
        <NavBar />
        <div className="body-wrapper">
            <ReservationForm />
        </div>
        <Footer />
        </>
    )
}

export { Reservations };