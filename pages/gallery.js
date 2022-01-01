import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import GalleryContent from '../components/GalleryContent/GalleryContent';
import Subscribe from '../components/Common/Subscribe';
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
                <Subscribe />
                <Footer />
            </>
        );
    }
}

export default Gallery;