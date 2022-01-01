import React, { Component } from 'react';
import Link from 'next/link';

class Skills extends Component {
    render() {
        return (
            <section className="services-area bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>多彩なマルチクエリエイター</h2>
                        <p>Vtuberとしては4年目、昔取った杵柄も含めて様々なスキルを持っています！</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/software_enginnering.png" alt="image" />
                                </div>

                                <h3>Software Engineering</h3>
                                <p>Web系の開発ならフロントエンドからバックエンドまでそつなくこなせます。特に軽量のサービスを爆速で開発するのが得意。</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/singing.png" alt="image" />
                                </div>

                                <h3>Singing and Vocal mixing</h3>
                                <p>AltVoice（ボイスチェンジャーを使用した）の歌唱技術に自信あり。自分でボーカルMixをするほか、20人の大規模合唱企画なども手掛けています。</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/planning.png" alt="image" />
                                </div>

                                <h3>Planning and production</h3>
                                <p>数十人が関わる企画制作進行の実績が複数件あり、企画立案、計画見積、制作進行、当日運用、広告宣伝、トラブル対応など幅広く対応できます。</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/graphic_design.png" alt="image" />
                                </div>

                                <h3>Graphic Design</h3>
                                <p>Webデザイン、配信サムネイル／レイアウトのデザイン、ロゴデザインなどを手掛けています。Vtuberイラスト集のページデザインや製本等も実績あり。</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/sound_enginnering.png" alt="image" />
                                </div>

                                <h3>Sound Enginnering</h3>
                                <p>音響技術や防音に関する知識が豊富でブログなども執筆しています。自然楽器をメインに据えたインストゥルメンタルBGMを作曲できます。</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img className="p-2" src="/images/icon/gamepad.png" alt="image" />
                                </div>

                                <h3>Game Play</h3>
                                <p>CivilizationV プレイ時間 3,000h、Apex Legends ダイヤランク、スパボンRオンライン グランドマスターなど幅広いゲームの実績があります。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
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
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Skills;