import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../../assets/img/vimory-logo.png';
class SecondHeader extends Component {

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
        let secondMenu = document.getElementById('secondMenu').clientHeight;
        let template =document.getElementById('template').clientHeight;
        let photoEdit =document.getElementById('photoEdit').clientHeight;
        // let slide =document.getElementById('slide').clientHeight;
        // let effect =document.getElementById('effect').clientHeight;
        // let frame =document.getElementById('frame').clientHeight;
        // let filter =document.getElementById('filter').clientHeight;
        // let getToday =document.getElementById('getToday').clientHeight;
        // let review =document.getElementById('review').clientHeight;
        // let pricing =document.getElementById('pricing').clientHeight;
        // let faqs =document.getElementById('faqs').clientHeight;
        // let getInTouch =document.getElementById('getInTouch').clientHeight;
        // let footer =document.getElementById('footer').clientHeight;
        let HeaderShow = introSection + appFeature + secondMenu;
        if (window.scrollY > (HeaderShow)) {
            this.setState({
                scrollingLock: true
            });
        }
        else if (HeaderShow <(introSection + appFeature + secondMenu + template + photoEdit)) {
            this.setState({
                scrollingLock: false
            });
        }
        else {
            this.setState({
                scrollingLock: false
            });
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop(300);
    };
    render() {
        return (
            <div id="secondMenu" className={this.state.scrollingLock ? 'second-menu fixedClass' : 'second-menu absoluteClass'}>
                <Navbar collapseOnSelect expand="lg">
                    <div className="container">
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="template"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Templates
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="photoEdit"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Photo Edit
                                         </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="slide"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Slide
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="effect"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Effect
                                       </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="frame"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Frame
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="filter"
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={2000}
                                            className="nav-link">Filter
                                        </Link>
                                    </li>
                                </ul>
                            </Nav>
                            <Nav className="ml-auto topMenu-icon">
                                <li>
                                    <Dropdown alignRight>
                                        <Dropdown.Toggle variant="none" id="dropdown-basic" className="mb-dropdown">
                                            <i className="fas fa-bars"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>

                                            {/* <Dropdown.Item>
                                                <Link
                                                    activeClass="active"
                                                    to="root"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={2000}
                                                ></Link>Home
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link
                                                    activeClass="active"
                                                    to="appFeature"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={2000}
                                                >Features</Link>
                                            </Dropdown.Item>
                                                <Link
                                                    activeClass="active"
                                                    to="pricing"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={2000}
                                                    className="dropdown-item"
                                                >Pricing</Link>
                                            <Dropdown.Item>
                                                <Link
                                                    activeClass="active"
                                                    to="faqs"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={2000}
                                                >FAQs</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link
                                                    activeClass="active"
                                                    to="getInTouch"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={2000}
                                                ></Link>Contact Us
                                            </Dropdown.Item> */}
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="intro"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={0}
                                                        duration={2000}
                                                        className="dropdown-item">Home
                                                   </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="appFeature"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={134}
                                                        duration={2000}
                                                        className="dropdown-item">Features
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="pricing"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={134}
                                                        duration={3000}
                                                        className="dropdown-item">Pricing
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="faqs"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={134}
                                                        duration={3000}
                                                        className="dropdown-item">FAQs
                                </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        activeClass="active"
                                                        to="getInTouch"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={134}
                                                        duration={3000}
                                                        className="dropdown-item">Contact Us
                                </Link>
                                                </li>
                                            </ul>
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </li>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default SecondHeader;