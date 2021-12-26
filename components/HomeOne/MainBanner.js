import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>Okuri Sae is Virtual-tool developper</h1>
                                <p>She is a Vtuber and works mainly on the Internet.
Her main activities include developing distribution tools and web services for Vtubers.<br></br>
Also, she knows a lot about voice changer technology and singing, and has posted a lot of feminine singing videos that don't seem to be fake voices.</p>

                                <div className="btn-box">
                                    <Link href="https://www.youtube.com/channel/UCj9IZnU2bKqGqABhQUU6F8g" target="_blank">
                                        <a className="btn btn-primary">Subscribe YouTube</a>
                                    </Link>

                                    <Link href="https://twitter.com/OkuriSae">
                                        <a className="optional-btn">See to Twitter</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-robot"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Fakevoice Songs</a>
                                        </Link>
                                    </h3>
                                    <p>Listen to a fake voice video of a feminine anime voice that you won't believe was sung by a man.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box active">
                                    <div className="icon">
                                        <i className="flaticon-robot"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Virtual tools</a>
                                        </Link>
                                    </h3>
                                    <p>Try to use web tools that can be used by Vtubers, live broadcasters, and singers.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-machine-learning"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Technology Blog</a>
                                        </Link>
                                    </h3>
                                    <p>Read technical blogs about web development and voice changers for Vtubers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;