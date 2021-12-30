import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About" 
                    bgImgClass="item-bg4" 
                />  

                <div className="projects-details-area ptb-110">
                    <div className="container">
                        <div className="projects-details">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="projects-details-image">
                                        <img src="/images/projects-img1.jpg" alt="image" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="projects-details-image">
                                        <img src="/images/projects-img2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="projects-details-info">
                                        <div className="h-25 text-center">
                                            <h4 className='mb-0'>小栗さえ（Okuri Sae）</h4>
                                            <p>ばーちゃるおばけ</p>
                                        </div>
                                        <div className="h-75">
                                            <div className="d-table">
                                                <div className="d-table-cell">
                                                    <ul>
                                                        <li><span>所属:</span> 無所属 [個人]</li>
                                                        <li><span>活動開始日:</span> 2019年1月1日</li>
                                                        <li><span>誕生日:</span> 10月31日 (2歳)</li>
                                                        <li><span>性別:</span> なし（霊体）</li>
                                                        <li><span>身長/体重:</span> 142cm/42kg</li>
                                                        <li><span>活動内容:</span> ツール開発、歌ってみた、ゲーム</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projects-details-desc">
                                <h3>Incredible Infrastructure</h3>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.</p>

                                <p>Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <div className='text-center'>
                                    <img src="/images/logo.png" width="600px" alt="image" />
                                </div>

                                <blockquote className="wp-block-quote">
                                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </blockquote>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>

                                <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>
                            </div>
                        </div>
                    </div>
                </div>
           
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;