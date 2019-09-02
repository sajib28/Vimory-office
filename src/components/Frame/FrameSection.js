import React, { Component } from 'react'
import FrameSlider from './FrameSlider';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/frame-bg.jpg';
class FrameSection extends Component {
    render() {
        return (
            <section id="frame">
              <BackgroundWithText id ="filterBg" backgroundImage={BackgroundImage} title="Frame" shadowTitle="Frame"/>
                <div className="content-area">
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