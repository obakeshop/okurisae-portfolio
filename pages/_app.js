import '../public/css/bootstrap.min.css';
import 'animate.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import React from 'react';
import Seo from '../components/Common/Seo';
import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';
import Modal from 'react-modal';

Modal.setAppElement('#__next')

export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Seo
                    pageTitle={'Okuri Sae Vtuber Portfolio | 小栗さえ プロフィールサイト'}
                    pageDescription={'小栗さえ プロフィールサイト'}
                    pagePath={'https://'}
                    pageImg={'https://'}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </>
        );
    }
}