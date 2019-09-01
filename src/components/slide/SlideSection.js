import React, { Component } from 'react'
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameSlide from '../../assets/img/mobile-frame-slide.png';
import SlideTab from './SlideTab';
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
                                    <h2 className="wow fadeInUp">Slide</h2>
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
                                <SlideTab/>
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