import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, NavDropdown, Dropdown, Button, ButtonToolbar, DropdownButton } from 'react-bootstrap';
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


        if (window.scrollY > (introSection + appFeature + 80)) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < introSection + appFeature + 80) {
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
            <div className={this.state.scrollingLock ? 'second-Menu fixedClass' : 'second-Menu absoluteClass'}>
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
                                            offset={0}
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
                                            offset={0}
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
                                            offset={0}
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
                                            offset={0}
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
                                            offset={0}
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
                                            offset={0}
                                            duration={2000}
                                            className="nav-link">Filter
                                        </Link>
                                    </li>
                                </ul>
                            </Nav>
                            <Nav className="ml-auto">
                                <li>
                                    <i className="fas fa-bars"></i>
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