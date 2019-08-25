import React, { Component } from 'react'
import mobileFrame from '../assets/img/mobile-frame.png';
import mobileFrameSlide from '../assets/img/mobile-frame-slide.png';
class Slide extends Component {
    render() {
        return (
            <section id="Slide">
                <div id="SlideBg" className="photo-area">
                    <div className="pic-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <div className="title-inner">
                                    <h2>Slide</h2>
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
                                <div className="col-md-7">
                                    <h3>Slide</h3>
                                    <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                                </div>
                                <div className="col-md-5">
                                    <div className="mobile-frame">
                                        <img src={mobileFrame} alt="" />
                                        <div className="mobile-frame-content">
                                            <img src={mobileFrameSlide} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Effect Section
        )
    }
}
export default Slide;