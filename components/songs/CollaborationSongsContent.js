import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';

class CollaborationSongsContent extends Component {

    collabSongs = [
        { key: 6, type: "Collaboration Song", date: "2021.6.7", youtube_id: "dyuU5YWtnIw", name: "【VSinger】Mr.Music【6人合唱】" },
        { key: 5, type: "Collaboration Song", date: "2021.3.24", youtube_id: "dPxkKw-ROKU", name: "【ボイチェン＋両声類 20人で】愛言葉Ⅲ / DECO*27 (Cover)【歌ってみた】" },
        { key: 4, type: "Collaboration Song", date: "2021.1.29", youtube_id: "tPJc-I8zQig", name: "【 Vtuber合唱 】Connecting / halyosy [Cover]【 Short Size 】" },
        { key: 3, type: "Collaboration Song", date: "2020.12.12", youtube_id: "6oaLusF4XLo", name: "雨とカプチーノ / 小栗さえ&花傘あるみ (cover)" },
        { key: 2, type: "Collaboration Song", date: "2020.10.3", youtube_id: "4_Oj2cWQxRY", name: "【VSinger】ベノム【8人合唱】" },
        { key: 1, type: "Collaboration Song", date: "2020.10.3", youtube_id: "u5JHTkmMLng", name: "【VSinger】ロキ【12人合唱】" },
    ]

    render() {
        const opts = {
            'aspect-ratio': 16 / 9,
            width: '100%',
          };
        return (
            <section className="blog-area bg-f2f6f9 ptb-110">
                <div className="container text-center">
                    <div className="in-page-ancher" id="collaboration_songs">
                        <div className="mb-5">
                            <h1>Collaboration Songs</h1>
                        </div>
                        
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
                                                    View on YouTube <i class="fab fa-youtube"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
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

export default CollaborationSongsContent;