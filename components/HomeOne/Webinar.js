import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Webinar extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="webinar-area">
                    <div className="row m-0">
                        <div className="col-lg-6 p-0">
                            <div className="webinar-content">
                                <h2>Let's listen to a state-of-the-art fake voicing.</h2>
                                <p>Japan's Fake Voice technology is so advanced that it can convert a low male voice into a natural female voice an octave higher. Try listening to it first.</p>

                                <Link href="#">
                                    <a className="btn btn-primary">Watch More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 p-0">
                            <div className="webinar-video-image">
                                <img src="/images/party_night.png" alt="image" />

                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='HLUNtpz7j3M' 
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default Webinar;