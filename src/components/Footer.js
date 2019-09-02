import React, { Component } from 'react';
import AboutModal from './modal/AboutModal';
import PrivacyPolicyModal from './modal/PrivacyPolicyModal';
import TermConditionModal from './modal/TermConditionModal';
import { Button, ButtonToolbar } from 'react-bootstrap';
// import BackTop from './BackTop';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], aboutModal: false }
        this.state = { deps: [], privacyModal: false }
        this.state = { deps: [], termConditionModal: false }
    }
    render() {
        let aboutModalClose = () => this.setState({ aboutModal: false });
        let privacyModalclose = () => this.setState({ privacyModal: false });
        let termConditionModalClose = () => this.setState({ termConditionModal: false });
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-menu">
                                <ul className="nav list-inline list-unstyled">
                                    <li>
                                        <a onClick={() => this.setState({ aboutModal: true })}>About us</a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.setState({ privacyModal: true })}>Privacy policy</a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.setState({ termConditionModal: true })}>Terms & Condition</a>
                                    </li>
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
                <AboutModal
                    show={this.state.aboutModal}
                    onHide={aboutModalClose} />
                <PrivacyPolicyModal
                    show={this.state.privacyModal}
                    onHide={privacyModalclose} />
                <TermConditionModal
                    show={this.state.termConditionModal}
                    onHide={termConditionModalClose} />
                {/* <BackTop/> */}
            </footer>
        )
    }
}
export default Footer;