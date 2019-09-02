import React, { Component } from 'react';
import mobileFrame from '../assets/img/mobile-frame.png';
import mobileFrameEffect from '../assets/img/mobile-frame-effect.png';
class Effect extends Component {
    render() {
        return (
            // Start Effect Section
            <section id="effect">
                <div id="effectBg" className="photo-area">
                    <div className="pic-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <div className="title-inner shadow-title text-center">
                                        <h2>Effect<span className="shadow-text">Effect</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-area">
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <div className="col-md-5">
                                    <div className="mobile-frame">
                                        <img src={mobileFrame} alt="" />
                                        <div className="mobile-frame-content">
                                            <img src={mobileFrameEffect} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Effect</h3>
                                    <p>Vimory grasps the sense of your own expectations and has a variety of Particle Effects for you to choose to make your video more lucrative. We've created lots of particle effects so you can show off what you can do with your photos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Effect Section
        );
    }
}

export default Effect;