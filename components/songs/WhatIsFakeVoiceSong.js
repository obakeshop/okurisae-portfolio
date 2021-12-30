import React, { Component } from 'react';
import Link from 'next/link';

class WhatIsFakeVoiceSong extends Component {
    render() {
        return (
            <section className="about-area bg-f2f6f9 ptb-110 in-page-ancher mb-5" id="what_is_fake_voice_song">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <img src="/images/voice_changer_ss.jpg" alt="image" />
                        </div>

                        <div className="col-lg-6 col-md-12">                            
                            <div className="mb-3">
                                <h1>What is Fake-voice Song?</h1>
                            </div>
                            <p>
                                私が歌っている女性ボーカル楽曲には、全てボイスチェンジャーが使われてます！（男性Voは生声）<br></br>
                                歌枠やライブでも歌唱できるようリアルタイムで音声変換が行われ、実際は１オクターブ下の音程で発声しています。
                                独自に編み出した機材設定と歌唱方法によって、声帯を鍛えたり痛めることなく長時間の歌唱が可能になっています。
                            </p>
                            <a className="btn btn-primary" href="https://saeokuri.hatenablog.com/" target="_blank">ボイスチェンジャーを使った歌唱方法や機材設定について学ぶ</a>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default WhatIsFakeVoiceSong;