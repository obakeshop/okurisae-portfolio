import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ArtsContent from '../components/ArtsContent/ArtsContent';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Arts extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Arts" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Arts" 
                    bgImgClass="item-bg1" 
                />  

                <ArtsContent />

                <FreeTrialForm />
                
                <Footer />
            </>
        );
    }
}

export default Arts;