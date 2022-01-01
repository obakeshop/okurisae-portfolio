import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Skills from '../components/HomeOne/Skills';
import SampleSong from '../components/HomeOne/SampleSong';
import Products from '../components/HomeOne/Products';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import Gallery from '../components/Common/Gallery';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <About />
                <Products />
                <SampleSong />
                <Skills />
                <Gallery />
                <Subscribe />
                <Footer />
            </>
        );
    }
}

export default Index;