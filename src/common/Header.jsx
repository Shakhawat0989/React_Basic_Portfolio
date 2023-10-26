import React, { Component } from 'react';
import { BrowserRouter as Main, Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Blogdetails from '../components/Blogdetails';
import Element from '../components/Element';
import Portfoliodetails from '../components/Portfoliodetails';



class Header extends Component {
    render() {
        return (
            <Main>
                <div>

                    <header>

                        <div class="header-area">
                            <div class="main-header  header-sticky">
                                <div class="container-fluid">
                                    <div class="row align-items-center">
                                        <div class="col-xl-2 col-lg-2 col-md-1">
                                            <div class="logo">
                                                <Link to="/home"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10">
                                            <div class="menu-main d-flex align-items-center justify-content-end">

                                                <div class="main-menu f-right d-none d-lg-block">
                                                    <nav>
                                                        <ul id="navigation">
                                                            <li><Link to="/home">Home</Link></li>
                                                            <li><Link to="/about">About</Link></li>
                                                            <li><Link to="/services">Services</Link></li>
                                                            <li><Link to="/portfolio">Portfolio</Link></li>
                                                            <li><a href="#">Page</a>
                                                                <ul class="submenu">
                                                                    <li><Link to="/blog">Blog</Link></li>
                                                                    <li><Link to="/blog_details">Blog Details</Link></li>
                                                                    <li><Link to="/element">Element</Link></li>
                                                                    <li><Link to="/portfolio_details">Portfolio Details</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/contact">Contact</Link></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                                    <a href="#" class="btn header-btn">Get Free Consultent</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </header>

                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/portfolio" element={<Portfolio />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/blog" element={<Blog />} />
                        <Route exact path="/blog_details" element={<Blogdetails />} />
                        <Route exact path="/element" element={<Element />} />
                        <Route exact path="/portfolio_details" element={<Portfoliodetails />} />
                    </Routes>


                </div>
            </Main >
        );
    }
}

export default Header;