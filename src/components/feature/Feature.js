import React, { Component } from 'react'

class Feature extends Component {
    render() {
        return (
            <ul className="feature-box">
                <li className="feature-1 wow slideInUp" data-wow-duration="2s" data-wow-delay=".5s">
                    <div className="content">Photo Edit</div>
                    <div className="hover"></div>
                </li>
                <li className="feature-2 wow slideInUp " data-wow-duration="2s" data-wow-delay="1s">
                    <div className="content">Effect</div>
                    <div className="hover"></div>
                </li>
                <li className="feature-3 wow slideInUp" data-wow-duration="2s" data-wow-delay="1.5s">
                    <div className="content">Slide</div>
                    <div className="hover"></div>
                </li>
                <li className="feature-4 wow slideInUp" data-wow-duration="2s" data-wow-delay="2s">
                    <div className="content">
                        <h3>Frame</h3>
                        <p> Lots of frame, So that you can
make a video more easily.</p>
                        <a href="">See more</a>
                    </div>
                    <div className="hover"></div>
                </li>
            </ul>
            
        )
    }
}
export default Feature;