import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContact from '../components/About/AboutContent';
import Services from '../components/HomeOne/Services';
import Team from '../components/Common/Team';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="About me" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About me" 
                    bgImgClass="item-bg1" 
                />  
                <AboutContact />
                <Services />
                <Team />
                <PartnerContent />
                <FeedbackSlider />
                <PricingCard />
                <FreeTrialForm />
                <Footer/>
            </>
        );
    }
}

export default About;