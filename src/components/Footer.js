import React, { Component } from 'react'
// import BackTop from './BackTop';
class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-menu">
                                <ul className="nav list-inline list-unstyled">
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Privacy policy</a></li>
                                    <li><a href="/">Terms & Condition</a></li>
                                    <li><a href="/">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="social-icon pull-right">
                                <ul className="list-inline list-unstyled float-right">
                                    <li><a className="follows" href="/">Follows Us: </a></li>
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BackTop/> */}
            </footer>
        )
    }
}
export default Footer;