import React, { Component, useState } from 'react';
import { ClassNames } from "@emotion/react";
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('react-modal'), {
    ssr: false
});
import Link from 'next/link';


class ArtsContent extends Component {

    items = [
        { key: 22, name: "Commission Illust", credit: "Illustrated by megapon98" },
        { key: 21, name: "Commission Illust", credit: "Illustrated by 海ばたり" },
        { key: 20, name: "Commission Illust", credit: "Illustrated by ぺっちー" },
        { key: 19, name: "Commission Illust", credit: "Illustrated by BLUE" },
        { key: 18, name: "Commission Illust", credit: "Illustrated by うさ叉吉" },
        { key: 17, name: "Commission Illust", credit: "Illustrated by 日芽けい" },
        { key: 16, name: "Commission Illust", credit: "Illustrated by 花丸椿" },
        { key: 15, name: "Commission Illust", credit: "Illustrated by メルガム" },
        { key: 14, name: "Vtuber Collaboration Art", credit: "Illustrated by 花傘あるみ" },
        { key: 13, name: "Fun Art", credit: "Gifted by レインボー" },
        { key: 12, name: "Fun Art", credit: "Illustrated by コガハルト" },
        { key: 11, name: "Live2D Model", credit: "Illustrated by 花傘あるみ" },
        { key: 10, name: "Song Image Art", credit: "Illustrated by 三番" },
        { key: 9, name: "Song Image Art", credit: "Illustrated by バロン" },
        { key: 8, name: "Song Image Art", credit: "Illustrated by おれお" },
        { key: 7, name: "Character Image Icon", credit: "Illustrated by わろし" },
        { key: 6, name: "Doted Icon", credit: "Illustrated by にわのこ" },
        { key: 5, name: "Character Image Icon", credit: "Illustrated by 瑞樹くりむ" },
        { key: 4, name: "Character Image Icon", credit: "Illustrated by 徒野ときは" },
        { key: 3, name: "Character Image Illust", credit: "Illustrated by もけ" },
        { key: 2, name: "Character Image Illust", credit: "Illustrated by 小栗さえ" },
        { key: 1, name: "3D Model", credit: "Base-model design by ぽんでろ" },
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
                                        <div className="col-lg-5 col-md-12">
                                            <div className="product-details-image text-center">
                                                <img src={`/images/arts/details/${this.state.modalSelection.key}.jpg`} alt="Modal Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-12">
                                            <div className="product-details-desc">
                                                <h3 className="text-white">{this.state.modalSelection.name}</h3>

                                                <div className="price">
                                                    <span className="new-price">$14.00</span>
                                                    <span className="old-price">$20.00</span>
                                                </div>

                                                <div className="product-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <a href="#" className="rating-count">3 reviews</a>
                                                </div>

                                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                                                <div className="product-add-to-cart">
                                                    <div className="input-counter">
                                                        <input type="number" defaultValue="0" />
                                                    </div>

                                                    <button type="submit" className="btn btn-primary"><i className="fas fa-cart-plus"></i> Add to Cart</button>
                                                </div>

                                                <div className="buy-checkbox-btn">
                                                    <div className="item">
                                                        <input className="inp-cbx" id="cbx" type="checkbox" />
                                                        <label className="cbx" htmlFor="cbx">
                                                            <span>
                                                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                </svg>
                                                            </span>
                                                            <span>I agree with the terms and conditions</span>
                                                        </label>
                                                    </div>

                                                    <div className="item">
                                                        <a href="#" className="btn btn-light">Buy it now!</a>
                                                    </div>
                                                </div>
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

export default ArtsContent;
