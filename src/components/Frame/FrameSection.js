import React, { Component } from 'react'
import FrameSlider from './FrameSlider';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/frame-bg.jpg';
import triangle from '../../assets/img/icon/triangle.png';
import pentagon from '../../assets/img/icon/pentagon.png';
import triangleIndigo from '../../assets/img/icon/triangle-indigo.png';
class FrameSection extends Component {
    render() {
        return (
            <section id="frame">
                <BackgroundWithText id="filterBg" backgroundImage={BackgroundImage} title="Frame" shadowTitle="Frame" />
                <div className="content-area">
                    <div className="vimory-animation animation-type-3 bottom-left">
                        <div className="vimory-animated-circle"></div>
                        <div className="vimory-animated-circle-container">
                            <img src={triangle} alt="Vimory" />
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-4 top-right">
                        <img src={pentagon} alt="" />
                        <div className="brk-animated-circle__container">
                            <img src={triangleIndigo} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <div className="col-md-7">
                                    <h3>Frame</h3>
                                    <p>Frame your captive looping film with a specified and colorful looking frame. Choose the frame (birthdays, weddings, friendship, seasonal, traveling or others) from Vimory that fits perfectly for your story or film and makes it interesting.</p>
                                </div>
                                <div className="col-md-5">
                                    <div className="mobile-frame frame-slider">
                                        <FrameSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            // End Frame Section
        )
    }
}
export default FrameSection;