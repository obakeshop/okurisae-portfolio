import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
               <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/white-logo.png" className="main-logo" alt="logo" />
                                        <img src="/images/black-logo.png" className="optional-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a className="nav-link">About</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/products" activeClassName="active">
                                                <a className="nav-link">Products</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/gallery" activeClassName="active">
                                                <a className="nav-link">Gallery</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/songs">
                                                <a className="nav-link">
                                                    Songs <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/songs#what_is_fake_voice_song" target="_blank" activeClassName="active">
                                                        <a className="nav-link">What is Fake-voice Song?</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/songs#cover_songs" target="_blank" activeClassName="active">
                                                        <a className="nav-link">Cover Songs</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/songs#collaboration_songs" target="_blank" activeClassName="active">
                                                        <a className="nav-link">Collaboration Songs</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Blog <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://note.com/okurisae/" target="_blank">Vtuber note</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://qiita.com/OkuriSae" target="_blank">Development Blog</a>
                                                </li>
                                                
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://saeokuri.hatenablog.com/" target="_blank">Sound Enginnering Blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                    <div className="others-options">
                                        <Link href="/contact">
                                            <a className="btn btn-primary">Subscribe!</a>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;
