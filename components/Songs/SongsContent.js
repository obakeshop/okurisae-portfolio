import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';

class SongsContent extends Component {

    soloSongs = [
        { key: 23, type: "Cover Song", date: "2021.12.23", youtube_id: "HLUNtpz7j3M", name: "【小栗さえ】PARTY☆NIGHT (cover) / デ・ジ・キャラット【歌ってみた】" },
        { key: 22, type: "Cover Song", date: "2021.12.21", youtube_id: "22Y7_zVgmuk", name: "【小栗さえ】HappyDay (cover) / デ・ジ・キャラット【歌ってみた】" },
        { key: 21, type: "Cover Song", date: "2021.12.20", youtube_id: "fLdsjeESV9A", name: "【小栗さえ】see you see you (cover) / デ・ジ・キャラット【歌ってみた】" },
        { key: 20, type: "Cover Song", date: "2021.12.19", youtube_id: "5w0MkIrIpms", name: "【小栗さえ】Welcome! (cover) / デ・ジ・キャラット【歌ってみた】" },
        { key: 19, type: "Cover Song", date: "2021.10.15", youtube_id: "hLK725J92cY", name: "【歌ってみた】POTATOになっていく / 小栗さえ【Vsinger】" },
        { key: 18, type: "Cover Song", date: "2020.5.4", youtube_id: "LTh9sZWrRxI", name: "VSinger が ハロ／ハワユ 歌った 【小栗さえ】" },
        { key: 17, type: "Cover Song", date: "2020.3.10", youtube_id: "MyP09KRokso", name: "unravel / 小栗さえ (cover)" },
        { key: 16, type: "Cover Song", date: "2019.11.17", youtube_id: "-S9j9S9xMe4", name: "【VSinger】ヒビカセ 歌ってみた" },
        { key: 15, type: "Cover Song", date: "2019.10.31", youtube_id: "O_Ki9XOZpgA", name: "HappyHalloween 歌ってみた" },
        { key: 14, type: "Cover Song", date: "2019.9.22", youtube_id: "M0UzJSQ8jJ8", name: "うそつき 歌ってみた" },
        { key: 13, type: "Cover Song", date: "2019.9.19", youtube_id: "NeocR3Gzas4", name: "【サトシ優勝記念】ふしぎなくすり【歌ってみた】" },
        { key: 12, type: "Cover Song", date: "2019.9.16", youtube_id: "JwefiwWs-zc", name: "しっぽのきもち 歌ってみた" },
        { key: 11, type: "Cover Song", date: "2019.9.5", youtube_id: "pMusat7W7qI", name: "シオカラ節 歌ってみた" },
        { key: 10, type: "Cover Song", date: "2019.9.1", youtube_id: "pHdBFxhp7Cg", name: "グロウアップ 歌ってみた" },
        { key: 9, type: "Cover Song", date: "2019.8.4", youtube_id: "VObI8YjD9PU", name: "奇跡の海 歌ってみた" },
        { key: 8, type: "Cover Song", date: "2019.8.3", youtube_id: "_2K12bB7bZk", name: "Agape 歌ってみた" },
        { key: 7, type: "Cover Song", date: "2019.6.28", youtube_id: "bpMavOAas8E", name: "ヒッチコック【歌ってみた】" },
        { key: 6, type: "Cover Song", date: "2019.6.23", youtube_id: "pPSmWNnVEjA", name: "シュガーソングとビターステップ【歌ってみた】" },
        { key: 5, type: "Cover Song", date: "2019.4.1", youtube_id: "SzOTX4vwadU", name: "スクランブル交際【歌ってみた】" },
        { key: 4, type: "Cover Song", date: "2019.3.19", youtube_id: "qkRF6dJxo04", name: "ハッピーシンセサイザ 【ダンス付】" },
        { key: 3, type: "Cover Song", date: "2019.3.18", youtube_id: "PNh3jlXWros", name: "妄想感傷代償連盟 歌ってみた【ダンス付き】" },
        { key: 2, type: "Cover Song", date: "2019.2.26", youtube_id: "EnoiwXBRDnI", name: "乙女解剖 ver.さえ&兄 【歌ってみた】" },
        { key: 1, type: "Cover Song", date: "2019.1.1", youtube_id: "VKdGmqevhLk", name: "メランコリック Ver.さえ 【歌ってみた】" },
    ]

    collabSongs = [
        { key: 6, type: "Collaboration Song", date: "2021.6.7", youtube_id: "dyuU5YWtnIw", name: "【VSinger】Mr.Music【6人合唱】" },
        { key: 5, type: "Collaboration Song", date: "2021.3.24", youtube_id: "dPxkKw-ROKU", name: "【ボイチェン＋両声類 20人で】愛言葉Ⅲ / DECO*27 (Cover)【歌ってみた】" },
        { key: 4, type: "Collaboration Song", date: "2021.1.29", youtube_id: "tPJc-I8zQig", name: "【 Vtuber合唱 】Connecting / halyosy [Cover]【 Short Size 】" },
        { key: 3, type: "Collaboration Song", date: "2020.12.12", youtube_id: "6oaLusF4XLo", name: "雨とカプチーノ / 小栗さえ&花傘あるみ (cover)" },
        { key: 2, type: "Collaboration Song", date: "2020.10.3", youtube_id: "4_Oj2cWQxRY", name: "【VSinger】ベノム【8人合唱】" },
        { key: 1, type: "Collaboration Song", date: "2020.10.3", youtube_id: "u5JHTkmMLng", name: "【VSinger】ロキ【12人合唱】" },
    ]

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("animate__fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " animate__fadeInUp animate__animated";
        evt.currentTarget.className += "current";
    }

    render() {
        const opts = {
            'aspect-ratio': 16 / 9,
            width: '100%',
        };
        return (
            <section className="pricing-tab">
                <div className="container text-center">

                    {/* Pricing Tab List */}
                    <ul className="tabs">
                        <li
                            className="current"
                            onClick={(e) => this.openTabSection(e, 'CoverSongs')}
                        >
                            Cover Songs
                        </li>

                        <li
                            onClick={(e) => this.openTabSection(e, 'CollaborationSongs')}
                        >
                            Collab Songs
                        </li>
                    </ul>

                    <div className="tab_content">
                        <div id="CoverSongs" className="tabs-item">
                            <div className="row">
                                {this.soloSongs.map(song => {
                                    return (
                                        <div className="col-lg-6 col-md-12" key={song.key}>
                                            <div className="single-blog-post">
                                                <div className="entry-thumbnail">
                                                    <YouTube videoId={song.youtube_id} opts={opts}/>
                                                </div>

                                                <div className="entry-post-content">
                                                    <div className="entry-meta">
                                                        <ul>
                                                            <li>
                                                                <a href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">{song.type}</a>
                                                            </li>
                                                            <li>{song.date}</li>
                                                        </ul>
                                                    </div>

                                                    <h3>
                                                        <a href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">{song.name}</a>
                                                    </h3>
                                                    
                                                    <a className="learn-more-btn" href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">
                                                        View on YouTube <i className="fab fa-youtube"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div id="CollaborationSongs" className="tabs-item">
                            <div className="row">
                                {this.collabSongs.map(song => {
                                    return (
                                        <div className="col-lg-6 col-md-12" key={song.key}>
                                            <div className="single-blog-post">
                                                <div className="entry-thumbnail">
                                                    <YouTube videoId={song.youtube_id} opts={opts}/>
                                                </div>

                                                <div className="entry-post-content">
                                                    <div className="entry-meta">
                                                        <ul>
                                                            <li>
                                                                <a href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">{song.type}</a>
                                                            </li>
                                                            <li>{song.date}</li>
                                                        </ul>
                                                    </div>

                                                    <h3>
                                                        <a href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">{song.name}</a>
                                                    </h3>
                                                    
                                                    <a className="learn-more-btn" href={`https://www.youtube.com/watch?v=${song.youtube_id}`} target="_blank">
                                                        View on YouTube <i className="fab fa-youtube"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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

export default SongsContent;