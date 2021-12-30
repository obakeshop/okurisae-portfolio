import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WhatIsAltVoice from '../components/Songs/WhatIsAltVoice';
import SongsContent from '../components/songs/SongsContent';
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
                
                <WhatIsAltVoice />

                <SongsContent />
                
                <Footer/>
            </>
        );
    }
}

export default Songs;