import React, { Component } from 'react';
import Link from 'next/link';

class Products extends Component {
    render() {
        return (
            <div className="partner-area ptb-110 bg-f2f6f9">
                <div className="container">
                    <div className="section-title">
                        <h2>バーチャル界をもっと豪華で便利に</h2>
                        <p>Vtuberや配信者向けのWebサービスやツールを開発しています。 プロフィールサービスや音源検索サイトなど、Vの活動が爆速で豪華になること間違いなし！</p>
                    </div>

                    <div className="customers-partner-list justify-content-center">

                        <div className="partner-item">
                            <a href="https://www.meish.me/" target="_blank">
                                <img src="/images/partner/meish.jpg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="https://obakeshop.github.io/Jimac/" target="_blank">
                                <img src="/images/partner/jimac.jpg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="https://okurisae.github.io/off-vocal-finder/" target="_blank">
                                <img src="/images/partner/ovf.jpg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="https://obakeshop.github.io/c99-minabook/index.html" target="_blank">
                                <img src="/images/partner/minabook.jpg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <Link href="/">
                                <a>
                                    <img src="/images/partner/portfolio.jpg" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <a href="https://okurisae.github.io/apex-funrule-slot/" target="_blank">
                                <img src="/images/partner/afs.jpg" alt="image" />
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <Link href="/songs">
                            <a class="learn-more-btn">全サービスを見る <i class="fas fa-arrow-right"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;