import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WhatIsFakeVoiceSong from '../components/Songs/WhatIsFakeVoiceSong';
import CoverSongsContent from '../components/songs/CoverSongsContent';
import CollaborationSongsContent from '../components/songs/CollaborationSongsContent';
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
                
                <WhatIsFakeVoiceSong />

                <CoverSongsContent />

                <CollaborationSongsContent />
                
                <Footer/>
            </>
        );
    }
}

export default Songs;