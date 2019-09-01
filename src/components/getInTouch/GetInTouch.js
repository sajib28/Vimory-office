import React, { Component } from 'react'
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import appilianLogo from '../../assets/img/logo-appilian.png';
class GetInTouch extends Component {
    render() {
        return (
            <section id="getInTouch" className="photo-with-content">
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2>Get In Touch<span className="shadow-text">Get In Touch</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="contact-info text-center">
                                <h3>Contact Us</h3>
                                <img src={appilianLogo} alt="Appilian Logo" />
                                <div className="weblink">
                                    <a href="/">Contact@appilian.com</a>
                                    <a href="/">www.Appilian.com</a>
                                </div>
                                <ul className="apps-logo">
                                    <li><a href="/"><img src={appleStore} alt="" /></a></li>
                                    <li><a href="/"><img src={googlePlay} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                    
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                          <textarea className="form-control" placeholder="Message" name="" id="" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-primary float-right">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default GetInTouch;
