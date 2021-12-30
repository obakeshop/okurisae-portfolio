import React, { Component, useState } from 'react';
import { ClassNames } from "@emotion/react";
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('react-modal'), {
    ssr: false
});
import Link from 'next/link';


class GalleryContent extends Component {

    items = [
        { key: 18, name: "Commission Illust", credit: "Illustrated by うさ叉吉", creditLink: "https://skima.jp/profile?id=183639", date: "2021/11/11", caption: "コミッションにてうさ叉吉様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 22, name: "Commission Illust", credit: "Illustrated by megapon98", creditLink: "https://skima.jp/profile?id=222915", date: "2021/11/5", caption: "コミッションにてmegapon98様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 19, name: "Commission Illust", credit: "Illustrated by BLUE", creditLink: "https://skima.jp/profile?id=103168", date: "2021/10/31", caption: "コミッションにてBLUE様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 17, name: "Commission Illust", credit: "Illustrated by 日芽けい", creditLink: "https://skima.jp/profile?id=234752", date: "2021/10/15", caption: "コミッションにて日芽けい様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 21, name: "Commission Illust", credit: "Illustrated by 海ばたり", creditLink: "https://skima.jp/profile?id=115197", date: "2021/10/14", caption: "コミッションにて海ばたり様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 20, name: "Commission Illust", credit: "Illustrated by ぺっちー", creditLink: "https://skima.jp/profile?id=115280", date: "2021/10/14", caption: "コミッションにてぺっちー様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 16, name: "Commission Illust", credit: "Illustrated by 花丸椿", creditLink: "https://skima.jp/profile?id=179767", date: "2021/9/30", caption: "コミッションにて花丸椿様に、歌ってみた/歌枠用のイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 15, name: "Commission Illust", credit: "Illustrated by メルガム", creditLink: "https://skima.jp/profile?id=233300", date: "2021/9/24", caption: "コミッションにてメルガム様に、歌ってみた/歌枠用のイラストを描いていただきました。歌詞字幕サービスJimacのイメージイラストにも使わせていただきました。", linkUrl: "https://obakeshop.github.io/Jimac/", linkName: "Try to Jimac" },
        { key: 13, name: "Fun Art", credit: "Gifted by レインボー", creditLink: "https://twitter.com/33swbk5ijRroChb", date: "2021/7/5", caption: "レインボー様にスパボンRオンラインアレンジのキャラクターイラストをいただきました！スパボンRオンラインは早期にグラマスになれて、Vtuber64人大会なども開けたのでとても楽しかったです！！", linkUrl: "https://twitter.com/33swbk5ijRroChb/status/1411999450797514757?s=20", linkName: "View on Twitter" },
        { key: 14, name: "Vtuber Collaboration Art", credit: "Illustrated by 花傘あるみ", creditLink: "https://twitter.com/Arumi_Hanagasa", date: "2021/6/15", caption: "APEX Vtuber大会（せんのいのり杯）に向けて、花傘あるみ様にオクタン（大会使用キャラ）アレンジのSDイラストを描いていただきました！ 新コミックマーケット99にて、アクリルキーホルダーが販売される予定です。", linkUrl: "https://twitter.com/Arumi_Hanagasa/status/1474304065513619460?s=20", linkName: "View on Twitter" },
        { key: 12, name: "Fun Art", credit: "Illustrated by コガハルト", creditLink: "https://twitter.com/cogahalt", date: "2021/3/21", caption: "コガハルト様にミナボックス水兵服デザインのイラストを描いていただきました。イラストは『C99 Vtuber合同誌』に収録されています。", linkUrl: "https://obakeshop.github.io/c99-minabook/index.html", linkName: "Go to MinaBook. LP" },
        { key: 11, name: "Live2D Model", credit: "Illustrated by 花傘あるみ", creditLink: "https://twitter.com/Arumi_Hanagasa", date: "2021/3/7", caption: "花傘あるみ様にLive2Dモデルを作っていただきました。制作過程も動画にしてもらっていますので、是非見てみてください！", linkUrl: "https://www.youtube.com/watch?v=gJIPqWfVpE8&t=2442s", linkName: "Watch a making video" },
        { key: 9, name: "Song Image Art", credit: "Illustrated by バロン", creditLink: "https://skima.jp/profile?id=122870", date: "2021/1/16", caption: "コミッションにてバロン様に、和田たけあき(くらげP)様作曲の『ビーストダンス』をイメージしたイラストを描いていただきました。歌ってみた動画は誠意制作中です。", linkUrl: "", linkName: "" },
        { key: 8, name: "Song Image Art", credit: "Illustrated by おれお", creditLink: "https://skima.jp/profile?id=69262", date: "2021/1/14", caption: "コミッションにておれお様に、Neru様作曲の『POTATOになっていく』をイメージしたイラストを描いていただきました。", linkUrl: "https://www.youtube.com/watch?v=hLK725J92cY", linkName: "Watch a music video" },
        { key: 10, name: "Song Image Art", credit: "Illustrated by 三番", creditLink: "https://skima.jp/profile?id=162457", date: "2021/1/7", caption: "コミッションにて三番様に、wotaku様作曲の『ジェヘナ』をイメージしたイラストを描いていただきました。歌ってみた動画は誠意制作中です。", linkUrl: "", linkName: "" },
        { key: 7, name: "Character Image Icon", credit: "Illustrated by わろし", creditLink: "https://skima.jp/profile?id=64532", date: "2020/12/22", caption: "コミッションにてわろし様に、アイコンイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 5, name: "Character Image Icon", credit: "Illustrated by 瑞樹くりむ", creditLink: "https://skima.jp/profile?id=5649", date: "2020/12/19", caption: "コミッションにて瑞樹くりむ様に、アイコンイラストを描いていただきました。", linkUrl: "", linkName: "" },
        { key: 3, name: "Character Image Illust", credit: "Illustrated by もけ", creditLink: "https://skima.jp/profile?id=151192", date: "2020/12/12", caption: "コミッションにてもけ様に、等身大のイメージイラストを描いていただきました。キャラデザ資料やサムネイルなど、色々な場面で使わせて頂きました。", linkUrl: "", linkName: "" },
        { key: 6, name: "Doted Icon", credit: "Illustrated by にわのこ", creditLink: "https://skima.jp/profile?id=143078", date: "2020/12/9", caption: "コミッションにてにわのこ様に、ドット絵を描いていただきました。アイコンなどに使わせて頂きました。", linkUrl: "", linkName: "" },
        { key: 4, name: "Character Image Icon", credit: "Illustrated by 徒野ときは", creditLink: "https://skima.jp/profile?id=49086", date: "2020/11/20", caption: "コミッションにて徒野ときは様に、2020年のハロウィンに合わせたデザインのキャラクターイラストを描いていただきました。デザインはオリジナルで、髪型や配色なども一新したよ！", linkUrl: "", linkName: "" },
        { key: 2, name: "Character Image Illust", credit: "Illustrated by 小栗さえ", creditLink: "", date: "2019/10/30", caption: "2019年のハロウィンに合わせた自作のキャラクターイラスト。オリジナルのデザインで、始めてキャラデザにハロウィン要素が入ってきたよ。", linkUrl: "", linkName: "" },
        { key: 1, name: "3D Model", credit: "Base-model design by ぽんでろ", creditLink: "https://booth.pm/ja/items/1256087", date: "2019/4/14", caption: "BOOTH で販売されている Mishe（ミーシェ）モデルの配色と衣装をアレンジしたものです。VRChatで使ったり、動画で歌ったりしていたよ！", linkUrl: "", linkName: "" },
    ]
    
    state = {
        isModalOpen:false,
        modalSelection: 0
    }
    openModal = (selection) => {
        this.setState({modalSelection: selection})
        this.setState({isModalOpen:true})
    }
    
    render() {
        return (
            <section className="team-area ptb-110">
                <div className="container">
                    <div className="row">

                        {this.items.map(item => {
                            return (
                                <div className="col-lg-4 col-sm-6" key={item.key}>
                                    <div className="single-team-box">
                                        <div className="image" onClick={() => {this.openModal(item)}}>
                                            <img src={`/images/arts/thumbnails/${item.key}.jpg`} alt={item.name} />
                                        </div>

                                        <div className="content">
                                            <h3>{item.name}</h3>
                                            <span>{item.credit}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <ClassNames>
                            {({ css, cx }) => (
                                <Modal
                                    isOpen={this.state.isModalOpen} 
                                    onRequestClose={() => this.setState({isModalOpen: false})}
                                    overlayClassName={{
                                    base: "overlay-base",
                                    afterOpen: "overlay-after",
                                    beforeClose: "overlay-before"
                                    }}
                                    className={{
                                    base: "content-base",
                                    afterOpen: "content-after",
                                    beforeClose: "content-before"
                                    }}
                                    closeTimeoutMS={500}
                                    portalClassName={css`
                                        .overlay-base {
                                            padding: 1rem;
                                            position: fixed;
                                            top: 0;
                                            bottom: 0;
                                            right: 0;
                                            left: 0;
                                            background-color: rgba(0, 0, 0, 0);
                                            opacity: 0;
                                            transition-property: background-color, opacity;
                                            transition-duration: 500ms;
                                            transition-timing-function: ease-in-out;
                                            outline: 0;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            z-index: 1000000;
                                        }
                        
                                        .overlay-after {
                                            background-color: rgba(0, 0, 0, 0.8);
                                            opacity: 1;
                                        }
                        
                                        .overlay-before {
                                            background-color: rgba(0, 0, 0, 0);
                                            opacity: 0;
                                        }
                        
                                        .content-base {
                                            position: relative;
                                            top: auto;
                                            left: auto;
                                            right: auto;
                                            bottom: auto;
                                            margin: 0 auto;
                                            border: 0;
                                            outline: 0;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            height: 0%;
                                            width: 0%;
                                            background-color: transparent;
                                            transition-property: background-color, width, height;
                                            transition-duration: 500ms;
                                            transition-timing-function: ease-in-out;
                                        }
                        
                                        .content-after {
                                            width: auto;
                                            height: auto;
                                        }
                                    `}
                                >
                                    <div className="row justify-content-center align-items-center" onClick={() => this.setState({isModalOpen: false})}>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-details-image text-center">
                                                <img src={`/images/arts/details/${this.state.modalSelection.key}.jpg`} alt="Modal Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12">
                                            <div className="product-details-desc">
                                                <h3 className="text-white">{this.state.modalSelection.name}</h3>
                                                <a href={this.state.modalSelection.creditLink} target="_blank"><p className="text-white">{this.state.modalSelection.credit}</p></a>
                                                <p className="">{this.state.modalSelection.date}</p>
                                                <p className="my-3 text-white">{this.state.modalSelection.caption}</p>

                                                { this.state.modalSelection.linkUrl !== "" &&
                                                    <div className="item">
                                                        <a href={this.state.modalSelection.linkUrl} target="_blank" className="btn btn-light">{this.state.modalSelection.linkName}</a>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                        </ClassNames>

                    </div>
                </div>
            </section>
        );
    }
}

export default GalleryContent;
