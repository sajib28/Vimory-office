import React, { Component } from 'react'
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import Slide1 from '../assets/img/3d-animation-1.png';
import Slide2 from '../assets/img/3d-animation-2.png';
import Slide3 from '../assets/img/3d-animation-3.png';
let slides = [
    {
        key: uuidv4(),
        content: <img src={Slide2} alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide1} alt="2" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide3} alt="3" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide2} alt="4" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide1} alt="5" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide3} alt="6" />
    },
    {
        key: uuidv4(),
        content: <img src={Slide1} alt="7" />
    }
];
class AnimationSlider extends Component {
    render() {

        return (
            <section id="threedSlider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                                <Carousel slides={slides} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default AnimationSlider;