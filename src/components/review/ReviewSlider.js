import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReviewSlider extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            fade: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        };
        return (

            <Slider {...settings}>
                <div>
                    <h3>Awesome Design!</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>

                    </ul>
                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name">M.John - @ms_brooklyn</span>
                </div>
                <div>
                    <h3>Lovely Design!</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>

                    </ul>
                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name">M.Smith - @ms_brooklyn</span>
                </div>
                <div>
                    <h3>Best Design!</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta</p>
                    <span className="author-name">M.Scanlon - @ms_brooklyn</span>
                </div>
            </Slider>

        );

    }
}
export default ReviewSlider;