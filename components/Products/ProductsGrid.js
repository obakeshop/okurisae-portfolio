import React, { Component } from 'react';
import Link from 'next/link';

class Products extends Component {

    products = [
        { key: 8, name: "Meish", siteUrl: "https://www.meish.me/", imageName: "meish.jpg" },
        { key: 7, name: "Off-Vocal Finder", siteUrl: "https://okurisae.github.io/off-vocal-finder/", imageName: "ovf.jpg" },
        { key: 6, name: "Jimac", siteUrl: "https://obakeshop.github.io/Jimac/", imageName: "jimac.jpg" },
        { key: 5, name: "MinaBook", siteUrl: "https://obakeshop.github.io/c99-minabook/index.html", imageName: "minabook.jpg" },
        { key: 4, name: "Apex Fun-Rule SLOT", siteUrl: "https://okurisae.github.io/apex-funrule-slot/", imageName: "afs.jpg" },
        { key: 3, name: "Breakout Maker", siteUrl: "https://openprocessing.org/sketch/1369738", imageName: "breakout_maker.jpg" },
        { key: 2, name: "Open Proccessing Contents", siteUrl: "https://openprocessing.org/user/184285?view=sketches", imageName: "open_proccessing_content.jpg" },
        { key: 1, name: "Okuri Sae Portfolio", siteUrl: "http://localhost:3000/", imageName: "okurisae_portfolio.jpg" },
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
                                                        <Link href="/blog/#">
                                                            <a>Admin</a>
                                                        </Link>
                                                    </li>
                                                    <li>March 10, 2020</li>
                                                </ul>
                                            </div>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>{product.name}</a>
                                                </Link>
                                            </h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                            
                                            <Link href="/blog-details">
                                                <a className="learn-more-btn">
                                                    Read More <i className="flaticon-add"></i>
                                                </a>
                                            </Link>
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