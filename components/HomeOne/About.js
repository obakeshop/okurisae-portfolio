import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="about-image">
                                <img className="w-100" src="/images/about/about.png" alt="image" />
                                <img className="w-50" src="/images/about/logo.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="about-content">
                                <h2>What is OkuriSae like?</h2>
                                <p>
                                    気ままにネット上を漂っているおばけたちの集合体だよ。<br></br>
                                    おばけらしくハロウィンが誕生日（結成日）で、みんなでワイワイお祭りごとが大好き！
                                    人間の霊も動物の霊も混ざっていていろんな知識やスキルを持ってるよ、見た目だって思いのまま。<br></br>
                                    おばけとしてネット上を震撼させるべく、いろんな大きい企画やサービス、マルチジェンダーな歌ってみたとかで活動中！
                                </p>

                                <Link href="/about">
                                    <a className="btn btn-primary">もっと詳しく</a>
                                </Link>
                            </div>
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

export default About;