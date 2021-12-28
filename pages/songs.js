import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SongsContent from '../components/Songs/SongsContent';
import Footer from '../components/Layouts/Footer';

class Songs extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Songs" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Songs" 
                    bgImgClass="item-bg2" 
                />  

                <SongsContent />
                
                <Footer/>
            </>
        );
    }
}

export default Songs;