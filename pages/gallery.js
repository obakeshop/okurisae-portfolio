import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import GalleryContent from '../components/GalleryContent/GalleryContent';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Gallery extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Gallery" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Gallery" 
                    bgImgClass="item-bg1" 
                />  

                <GalleryContent />

                <FreeTrialForm />
                
                <Footer />
            </>
        );
    }
}

export default Gallery;