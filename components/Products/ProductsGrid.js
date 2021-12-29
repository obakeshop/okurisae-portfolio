import React, { Component } from 'react';
import Link from 'next/link';

class Products extends Component {

    products = [
        { key: 8, name: "Meish", siteUrl: "https://www.meish.me/", codeUrl: "https://github.com/OkuriSae/Meish", imageName: "meish.jpg", type: "Web Service", releaseDate: "2020/1/31", caption: "バーチャルキャラクターのためのプロフィールサービス。キャラクター設定や立ち絵、三面図などの設定素材を管理できます。" },
        { key: 7, name: "Off-Vocal Finder", siteUrl: "https://okurisae.github.io/off-vocal-finder/", codeUrl: "https://github.com/OkuriSae/off-vocal-finder", imageName: "ovf.jpg", type: "Web Service", releaseDate: "2020/11/30", caption: "歌い手、Vsingerのための音源検索サービス。公式音源やアレンジ音源の音源ファイルや二次利用ライセンスなどを検索できます。" },
        { key: 6, name: "Jimac", siteUrl: "https://obakeshop.github.io/Jimac/", codeUrl: "https://github.com/obakeshop/Jimac", imageName: "jimac.jpg", type: "Web tool", releaseDate: "2020/2/10", caption: "歌い手や配信者のための歌詞字幕作成ツール。事前に歌詞を登録することにより、配信中にリアルタイムで楽曲の歌詞字幕を表示できます。" },
        { key: 5, name: "Apex Fun-Rule SLOT", siteUrl: "https://okurisae.github.io/apex-funrule-slot/", codeUrl: "https://github.com/OkuriSae/apex-funrule-slot", imageName: "afs.jpg", type: "Web tool", releaseDate: "2020/12/22", caption: "APEX Legends のゲーム配信をより面白くする追加ルールを提案してくれるツール。カスタマイズによってルールの追加も可能です。" },
        { key: 4, name: "Breakout Maker", siteUrl: "https://openprocessing.org/sketch/1369738", codeUrl: "https://openprocessing.org/sketch/1369738", imageName: "breakout_maker.jpg", type: "Mini game Generator", releaseDate: "2021/11/27", caption: "昔懐かしおブロック崩しゲームを作れるWebツール。画像素材があれば5分ほどで作成でき、難易度のカスタマイズも可能。専用のURLが発行されます。" },
        { key: 3, name: "Open Proccessing Contents", siteUrl: "https://openprocessing.org/user/184285?view=sketches", codeUrl: "https://openprocessing.org/user/184285?view=sketches", imageName: "open_proccessing_content.jpg", type: "Programmable Content", releaseDate: "2019/6/24 ~", caption: "Open Proccessing を使ったアニメーション素材集。画像を入れ替えるだけで使える上、JavaScriptを書ければアレンジも可能です。" },
        { key: 2, name: "MinaBook", siteUrl: "https://obakeshop.github.io/c99-minabook/index.html", codeUrl: "https://github.com/obakeshop/c99-minabook", imageName: "minabook.jpg", type: "Landing Page", releaseDate: "2021/12/24", caption: "新コミックマーケット99に出展したVtuber合同誌の特設ページ。サイト制作のほか、合同誌の制作進行やレイアウトデザインを担当。" },
        { key: 1, name: "Okuri Sae Portfolio", siteUrl: "http://localhost:3000/", codeUrl: "https://github.com/obakeshop/okurisae-portfolio", imageName: "okurisae_portfolio.jpg", type: "Portfolio Site", releaseDate: "2022/1/1", caption: "Vtuber向けのポートフォリオサイト。コンテンツがあれば、デザインテンプレート（有料/無料）から爆速で開発可能です。" },
    ]

    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="row">
                        {this.products.map(product => {
                            return (
                                <div className="col-lg-4 col-md-6" key={product.key}>
                                    <div className="single-blog-post">
                                        <div className="entry-thumbnail">
                                            <a href={product.siteUrl} target="_blank">
                                                <img src={`/images/products/${product.imageName}`} alt="image" />
                                            </a>
                                        </div>

                                        <div className="entry-post-content">
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <a href={product.siteUrl} target="_blank">{product.type}</a>
                                                    </li>
                                                    <li>{product.releaseDate}</li>
                                                </ul>
                                            </div>

                                            <h3>
                                                <a href={product.siteUrl} target="_blank">{product.name}</a>
                                            </h3>

                                            <p>{product.caption}</p>
                                            
                                            <a className="learn-more-btn" href={product.codeUrl} target="_blank">
                                                View Code <i className="flaticon-add"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
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

export default Products;