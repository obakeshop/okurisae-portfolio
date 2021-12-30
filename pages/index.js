import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Services from '../components/HomeOne/Services';
import SampleSong from '../components/HomeOne/SampleSong';
import Products from '../components/HomeOne/Products';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialForm from '../components/Common/FreeTrialForm';
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
                <Services />
                <FreeTrialForm />
                <Footer />
            </>
        );
    }
}

export default Index;