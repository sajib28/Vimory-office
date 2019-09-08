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
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2 className="wow zoomIn" data-wow-delay="0.2s" data-wow-delay="0.2s">Get In Touch<span className="shadow-text wow zoomIn" data-wow-delay="0.4s" data-wow-delay="0.4s">Get In Touch</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                            <div className="contact-info text-center">
                                <h3 className="wow" data-wow-delay="0.4s" data-wow-delay="0.4s">Contact Us</h3>
                                <img className="wow" data-wow-delay="0.6s" data-wow-delay="0.6s" src={appilianLogo} alt="Appilian Logo" />
                                <div className="weblink wow" data-wow-delay="0.8s" data-wow-delay="0.8s">
                                    <a href="/">Contact@appilian.com</a><br />
                                    <a href="/">www.Appilian.com</a>
                                </div>
                                <ul className="apps-logo">
                                    <li className="wow" data-wow-delay="0.8s" data-wow-delay="0.8s"><a href="/"><img src={appleStore} alt="" /></a></li>
                                    <li className="wow" data-wow-delay="1s" data-wow-delay="1s"><a href="/"><img src={googlePlay} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div className="contact-form">
                                <form action="">
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
