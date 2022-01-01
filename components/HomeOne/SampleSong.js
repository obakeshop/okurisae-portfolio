import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class SampleSong extends Component {

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
                                <h2>音楽は Gender Free の時代に</h2>
                                <h6>2021.12.23 - PARTY☆NIGHT (cover) / デ・ジ・キャラット</h6>
                                <p>
                                    ボイスチェンジャーを使った2つ目の声を AltVoice と呼び、なんとこの曲は収録時に1オクターブ下の音程で歌われています。<br></br>
                                    歌ってみたやカラオケがジェンダーフリーなコンテンツになる時代を待ってます！
                                </p>

                                <Link href="/songs">
                                    <a className="btn btn-primary">他の曲も聴いてみる</a>
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

export default SampleSong;