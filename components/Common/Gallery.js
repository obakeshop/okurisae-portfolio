import React, { Component } from 'react';
import Link from 'next/link';

class Gallery extends Component {
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>ギャラリー</h2>
                        <p>キャラクターイメージイラストや、歌ってみた動画で使われたグラフィックなど、素敵なイラストをまとめています。</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                            <img src="/images/arts/thumbnails/3.jpg" alt="image" /> 
                                </div>

                                <div className="entry-post-content">
                                    <h3>Character Image Graphic</h3>
                                    <p>Illustrated by もけ</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <img src="/images/arts/thumbnails/9.jpg" alt="image" />
                                </div>

                                <div className="entry-post-content">
                                    <h3>Illustration for the song</h3>
                                    <p>Illustrated by バロン</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <img src="/images/arts/thumbnails/13.jpg" alt="image" />
                                </div>

                                <div className="entry-post-content">
                                    <h3>Fun Art</h3>
                                    <p>Gifted by レインボー</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link href="/gallery">
                                <a className="learn-more-btn">全てのイラストを見る <i className="fas fa-arrow-right"></i></a>
                            </Link>
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
                <div className="shape-img7">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
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

export default Gallery;