import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/effect-bg.jpg';
import mobileFrame from '../../assets/img/mobile-frame.png';
import triangle from '../../assets/img/icon/triangle.png';
import EffectVideo from '../../assets/media/effect/final.mp4';
class Effect extends Component {
    render() {
        return (
            // Start Effect Section
            <section id="effect">
                {/* animation */}

                {/* end animation */}
                <BackgroundWithText id="effectBg" backgroundImage={BackgroundImage} title="Effect" shadowTitle="Effect" />
                <div className="content-area">
                    <div className="circle-position two-circle top-circle-left">
                        <div className="circle-wrapper">
                            <div className="orbit circle-spin">
                                <div className="first-circle">
                                    <div className="outer-orbit-small">
                                        <div className="small"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-3 bottom-right">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt="Vimory" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <div className="col-md-5">
                                    <div className="mobile-frame wow fadeInLeft" animation-delay="0.4s" data-wow-delay="0.4s">
                                        <img src={mobileFrame} alt="" />
                                        <div className="mobile-frame-content">
                                            <div className="video-template">
                                                <video autoPlay muted loop>
                                                    <source src={EffectVideo} type="video/webm" />
                                                    <source src={EffectVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h3 className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">Effect</h3>
                                    <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">Vimory grasps the sense of your own expectations and has a variety of Particle Effects for you to choose to make your video more lucrative. We've created lots of particle effects so you can show off what you can do with your photos.</p>
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