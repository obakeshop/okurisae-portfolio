import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a>
                                    <p>
                                        当ポートフォリオサイトは小栗さえが代表するバーチャルツール開発サークル『おばけや』によって管理運営されています。<br></br>
                                        ご依頼やご相談がある方は 小栗さえ の Twitter DM よりご連絡をお願いします。
                                    </p>
                                </div>

                                <ul className="social">
                                    <li>
                                        <a href="https://twitter.com/OkuriSae" target="_blank">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/c/OkuriSae" target="_blank">
                                            <i className="flaticon-youtube-play-button"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/OkuriSae" target="_blank">
                                        <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        <Link href="/service-details">
                                            <a>Meish</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Jimac</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Off-Vocal Finder</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Apex Fun-Rule SLOT</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>MinaBook.</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products">
                                            <a>Products</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery">
                                            <a>Gallery</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/songs">
                                            <a>Songs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs">
                                            <a>Blogs</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Twitter:</span> 
                                        @OkuriSae
                                    </li>
                                    <li>
                                        <span>Discord:</span> 
                                        小栗さえ#7371
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        sae.okuri@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p>Copyright &copy;{currentYear} OkuriSae. All Rights Reserved <a href="https://github.com/obakeshop" target="_blank">Obakeya</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-map">
                    <img src="/images/circle-map.png" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;