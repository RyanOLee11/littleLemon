import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Welcome } from '../components/Welcome';
import { Specials } from '../components/Specials';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';


const Home = () => {
    return (
        <>
        <NavBar />
        <div className="body-wrapper">
        <Welcome />
        <Specials />
        <Testimonials />
        <About />
        </div>
       <Footer />
       </>
    );
}

export { Home };