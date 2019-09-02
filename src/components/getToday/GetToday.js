import React, { Component } from 'react'
import appleStore from '../../assets/img/apple-app-store.png';
import googlePlay from '../../assets/img/google-play.png';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameToday from '../../assets/img/mobile-frame-get-today.png';
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
                                <div className="solar-system"><div className="orbit mercury-orbit"></div><div className="mercury-spin"><div id="mercury"></div></div><div className="orbit venus-orbit"></div><div className="venus-spin"><div id="venus"></div></div><div className="orbit earth-orbit"></div><div className="earth-spin"><div className="orbit moon-orbit"></div><div className="moon-spin"><div id="moon"></div></div></div></div>
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt="" />
                                    <div className="mobile-frame-content">
                                        <img src={mobileFrameToday} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Get Today Section 
        );
    }
}
export default GetToday;