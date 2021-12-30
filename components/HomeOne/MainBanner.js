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
                                <h1>Okuri Sae's Portfolio</h1>
                                <p>
                                    わりと何でもできるハイブリッドなばーちゃるおばけ。
                                    Vtuberや配信者用のWebツール開発をメインに、のんびりとばーちゃる界を漂っています。<br></br>
                                    プログラミング、歌ってみた、音響技術、企画運営、デザイン、ゲーム配信などなど多方面で活動中！
                                    ボイスチェンジャーを使った歌ってみたもお上手なので聴いてみてね <i class="fas fa-headphones-alt"></i>
                                </p>

                                <div className="btn-box">
                                    <Link href="https://www.youtube.com/channel/UCj9IZnU2bKqGqABhQUU6F8g" target="_blank">
                                        <a className="btn btn-primary">応援する</a>
                                    </Link>

                                    <a className="optional-btn" href="https://twitter.com/OkuriSae" target="_blank"><i class="fab fa-twitter"> View Twitter</i></a>
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
                                        <i class="fas fa-microphone-alt"></i>
                                    </div>

                                    <h3>
                                        <Link href="/songs">
                                            <a>AltVoice Songs</a>
                                        </Link>
                                    </h3>
                                    <p>ボイスチェンジャーを使ったマルチジェンダーな歌唱動画を投稿しています。 目指すは<b>『歌唱のテクニックとしてボイスチェンジャーが受け入れられる』</b>世界！</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box active">
                                    <div className="icon">
                                        <i class="fas fa-tools"></i>
                                    </div>

                                    <h3>
                                        <Link href="/products">
                                            <a>Virtual tools</a>
                                        </Link>
                                    </h3>
                                    <p>Vtuberや配信者向けのWebサービスやツールを開発しています。 プロフィールサービスや音源検索サイトなど、Vの活動が爆速で豪華になること間違いなし！</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i class="fas fa-book"></i>
                                    </div>

                                    <h3>
                                        <Link href="/">
                                            <a>Tech Blog</a>
                                        </Link>
                                    </h3>
                                    <p>Vtuber向けの記事やプログラミングに関するノウハウ、音響系の技術記事などを書いています。 プログラミングや音響について学びたい方を応援します！</p>
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