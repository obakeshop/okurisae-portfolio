import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductsGrid from '../components/Products/ProductsGrid';
import Footer from '../components/Layouts/Footer';

class Products extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Products" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Products" 
                    bgImgClass="item-bg2" 
                />  

                <ProductsGrid />
                
                <Footer/>
            </>
        );
    }
}

export default Products;