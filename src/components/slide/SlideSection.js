import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameSlide from '../../assets/img/mobile-frame-slide.png';
import BackgroundImage from '../../assets/img/slide-bg.jpg';
import SlideTab from './SlideTab';
class Slide extends Component {
    render() {
        return (
            <section id="Slide">
               <BackgroundWithText id ="SlideBg" backgroundImage={BackgroundImage} title="Slide" shadowTitle="Slide"/>
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