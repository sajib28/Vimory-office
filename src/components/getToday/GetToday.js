import React, { Component } from 'react'
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameToday from '../../assets/media/Main.mp4';
import redSmall from '../../assets/img/icon/red_round.png';
import triangleSmall from '../../assets/img/icon/triangle-small.png';
import redBig from '../../assets/img/icon/red_round2.png';
import rectangleBlue from '../../assets/img/icon/rectangleblue.png';
class GetToday extends Component {
    render() {
        return (
            // Start Get Today Section 
            <section id="getToday" className="back-img">
                <span className="shadow-text wow zoomIn" data-wow-delay="0.4s" animation-delay="0.4s">Get it Today</span>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2 className="wow zoomIn" data-wow-delay="0.2s" animation-delay="0.2s">Get it Today</h2>
                                </div>
                            </div>
                            <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your need and the story you want to give an impact.</p>
                            <ul className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                <li><a rel="noopener noreferrer" href="https://apps.apple.com/us/app/vimory-photo-video-maker/id1359573092" target="_blank"><img src={appleStore} alt="Apple Store" /></a></li>
                                <li><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.appilian.vimory" target="_blank"><img src={googlePlay} alt="Google Play Store" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">

                            {/* <div className="two-circle-four-small">
                                    <div className="brk-animated-circle brk-animated-circle-2 brk-library-rendered">
                                        <div className="brk-animated-circle__container">
                                            <span className="brk-animated-circle__dot-1"></span>
                                        </div>
                                    </div>
                                </div> */}
                            <div className="mobile-frame wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                {/* animation */}
                                <div className="vimory-animation animation-type-5">
                                    <div className="cir-1">
                                        <img className="red-small" src={redSmall} alt="VImory" />
                                        <img className="triangle-small" src={triangleSmall} alt="VImory" />

                                    </div>
                                    <div className="cir-2 cir-3">
                                        <img className="rectangleBlue-inside" src={rectangleBlue} alt="VImory" />
                                        <img className="triangle-small-outside" src={triangleSmall} alt="VImory" />
                                    </div>
                                    <div className="cir-2">
                                        <img className="redBig" src={redBig} alt="VImory" />
                                        <img className="rectangleBlue" src={rectangleBlue} alt="VImory" />

                                    </div>
                                    {/* <div className="vimory-animated-circle-container">
                        
                        
                    </div> */}
                                </div>
                                {/* End animation */}
                                <img className="frame-get-it-today" src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                    <div className="video-template">
                                        <video autoPlay muted loop>
                                            <source src={mobileFrameToday} type="video/webm" />
                                            <source src={mobileFrameToday} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
            // End Get Today Section 
        );
    }
}
export default GetToday;