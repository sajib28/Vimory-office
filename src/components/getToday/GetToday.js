import React, { Component } from 'react'
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameToday from '../../assets/media/Main.mp4';
class GetToday extends Component {
    render() {
        return (
            // Start Get Today Section 
            <section id="getToday" className="back-img">
                <span className="shadow-text">Get it Today</span>
                <div className="pic-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <div className="title-inner shadow-title text-center">
                                    <h2>Get it Today</h2>
                                </div>
                            </div>
                            <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your need and the story you want to give an impact.</p>
                            <ul>
                                <li><a href="/"><img src={appleStore} alt="" /></a></li>
                                <li><a href="/"><img src={googlePlay} alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="circle-animation">
                                <div className="two-circle-four-small">
                                    <div class="brk-animated-circle brk-animated-circle-2 brk-library-rendered">
                                        <div class="brk-animated-circle__container">
                                            <span class="brk-animated-circle__dot-1"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt="" />
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
                        </div>
                    </div >
                </div >
            </section >
            // End Get Today Section 
        );
    }
}
export default GetToday;