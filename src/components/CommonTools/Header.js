import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, NavDropdown, Button, ButtonToolbar } from 'react-bootstrap';

// import file or image
import logo from '../../assets/img/vimory-logo.png';

class Header extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // example how to bind object in React ES6
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        let introSection = document.getElementById('intro').clientHeight;
        let appFeature = document.getElementById('appFeature').clientHeight;
        if (window.scrollY > introSection + appFeature-80) {
            this.setState({
                scrollingLock: false
            });
        } else if (window.scrollY < introSection + appFeature-60) {
            this.setState({
                scrollingLock: true
            });
        }

    }

    scrollToTop = () => {
        scroll.scrollToTop(300);
    };

    render() {
        
        return (
            <div>
                {/* <nav id="mainMenu" style=
                {{
                    width: "100%", top: "0px", zIndex: "999", position: this.state.scrollingLock ? "static" : "absolute"
                }}
                className={this.state.scrollingLock ? 'fixedClass navbar navbar-expand-lg navbar-light header-area' : 'absoluteClass navbar navbar-expand-lg navbar-light header-area'}>
                <div className="container">
                    <Link to="/" href="index.html" className="navbar-brand">
                        <img src={logo} alt="Vimory Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                        aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="mainMenu"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={2000}
                                    className="nav-link">Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="appFeature"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={2000}
                                    className="nav-link">Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="pricing"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={3000}
                                    className="nav-link">Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="faqs"
                                    spy={true}
                                    smooth={true}
                                    offset={60}
                                    duration={3000}
                                    className="nav-link">FAQs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="getInTouch"
                                    spy={true}
                                    smooth={true}
                                    offset={60}
                                    duration={3000}
                                    className="nav-link">Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
                <Navbar id="mainMenu" collapseOnSelect expand="lg" style=
                {{
                    width: "100%", top: "0px", zIndex: "999", position: this.state.scrollingLock ? "fixed" : "absolute"
                }} className={this.state.scrollingLock ? 'fixedClass navbar navbar-expand-lg navbar-light header-area' : 'absoluteClass navbar navbar-expand-lg navbar-light header-area'}>
                    <div className="container">
                        <Navbar.Brand href="/"><img src={logo} alt="Vimory Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className="navbar-nav" id="main-menu">
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="root"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={2000}
                                            className="nav-link">Home
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="appFeature"
                                            spy={true}
                                            smooth={true}
                                            offset={134}
                                            duration={2000}
                                            className="nav-link">Features
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="pricing"
                                            spy={true}
                                            smooth={true}
                                            offset={134}
                                            duration={3000}
                                            className="nav-link">Pricing
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="faqs"
                                            spy={true}
                                            smooth={true}
                                            offset={134}
                                            duration={3000}
                                            className="nav-link">FAQs
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="getInTouch"
                                            spy={true}
                                            smooth={true}
                                            offset={134}
                                            duration={3000}
                                            className="nav-link">Contact Us
                                </Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </div>
        );
    }
}

export default Header;