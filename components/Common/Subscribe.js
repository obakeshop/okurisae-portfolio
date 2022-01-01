import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div className="in-page-ancher" id="subscribe">
                <section className="free-trial-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="free-trial-image">
                                <img src="/images/subs.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="free-trial-content">
                                <h2>Please Subscribe!</h2>

                                <p className="mt-3">
                                    小栗さえの活動は以下のような方法で応援することができます！
                                </p>
                                
                                <ul className="text-white mt-3">
                                    <li> 
                                        <a className="text-white" href="https://twitter.com/OkuriSae" target="_blank">
                                            Twitter フォロー、コメント、制作物宣伝ツイートのRT</a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="https://www.youtube.com/channel/UCj9IZnU2bKqGqABhQUU6F8g" target="_blank">
                                            YouTube のチャンネル登録、配信・動画へのコメント
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="/">
                                            PIXIV FANBOX にて支援プランに加入（準備中）
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="https://www.amazon.jp/hz/wishlist/ls/2TCUDC0B17WGA?ref_=wl_share" target="_blank">
                                            Amazonほしいものリストからプレゼントを送る
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Subscribe;