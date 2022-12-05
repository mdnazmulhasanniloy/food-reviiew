import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Carousel from './Carousel/Carousel';
import Contact from './Contact/Contact';
import ReviewHome from './ReviewHome/ReviewHome';
import Services from './Services/Services';
import { useTitle } from './../../Hooks/UseTitle';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Contact></Contact>
            <ReviewHome></ReviewHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;