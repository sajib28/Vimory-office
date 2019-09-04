import React, { Component } from 'react'

class Feature extends Component {
    render() {
        return (
            <ul className="feature-box">
                {/* <li className="feature-1 wow slideInLeft" data-wow-duration="2s" data-wow-delay=".5s">
                        <div className="content">Photo Edit</div>
                        <div className="hover"></div>
                    </li>
                    <li className="feature-2 wow slideInDown" data-wow-duration="2s" data-wow-delay="1s">
                        <div className="content">Effect</div>
                        <div className="hover"></div>
                    </li>
                    <li className="feature-3 wow slideInUp" data-wow-duration="2s" data-wow-delay="1.5s">
                        <div className="content">Slide</div>
                        <div className="hover"></div>
                    </li> */}
                <li className="feature-1 brk-sc-honeycomb-one brk-sc-honeycomb-one_wide-shadow brk-sc-honeycomb-one_hide-btn brk-sc-honeycomb-one_left">
                    <div className="brk-sc-honeycomb-one__content">
                        <h4 className="font__family-montserrat font__weight-bold font__size-24 brk-sc-honeycomb-one__header">Photo Edit</h4>
                        <p className="font__family-open-sans font__size-16 mt-20 brk-dark-font-color brk-sc-honeycomb-one__p">Lots of frame, So that you can make a video more easily.</p>
                        <a href="#" className="vimory-btn btn">See More</a>
                    </div>
                    <div className="brk-sc-honeycomb-one__layer brk-base-bg-gradient-14"></div>
                    <div className="brk-sc-honeycomb-one__hex-1"></div>
                    <div className="brk-sc-honeycomb-one__hex-2"></div>
                </li>
                <li className="feature-2 brk-sc-honeycomb-one brk-sc-honeycomb-one_wide-shadow brk-sc-honeycomb-one_hide-btn brk-sc-honeycomb-one_left">
                    <div className="brk-sc-honeycomb-one__content">
                        <h4 className="font__family-montserrat font__weight-bold font__size-24 brk-sc-honeycomb-one__header">Effect</h4>
                        <p className="font__family-open-sans font__size-16 mt-20 brk-dark-font-color brk-sc-honeycomb-one__p">Lots of frame, So that you can make a video more easily.</p>
                        <a href="#" className="vimory-btn btn">See More</a>
                    </div>
                    <div className="brk-sc-honeycomb-one__layer brk-base-bg-gradient-14"></div>
                    <div className="brk-sc-honeycomb-one__hex-1"></div>
                    <div className="brk-sc-honeycomb-one__hex-2"></div>
                </li>
                <li className="feature-3 brk-sc-honeycomb-one brk-sc-honeycomb-one_wide-shadow brk-sc-honeycomb-one_hide-btn brk-sc-honeycomb-one_left">
                    <div className="brk-sc-honeycomb-one__content">
                        <h4 className="font__family-montserrat font__weight-bold font__size-24 brk-sc-honeycomb-one__header">Slide</h4>
                        <p className="font__family-open-sans font__size-16 mt-20 brk-dark-font-color brk-sc-honeycomb-one__p">Lots of frame, So that you can make a video more easily.</p>
                        <a href="#" className="vimory-btn btn">See More</a>
                    </div>
                    <div className="brk-sc-honeycomb-one__layer brk-base-bg-gradient-14"></div>
                    <div className="brk-sc-honeycomb-one__hex-1"></div>
                    <div className="brk-sc-honeycomb-one__hex-2"></div>
                </li>
                <li className="feature-4 brk-sc-honeycomb-one brk-sc-honeycomb-one_wide-shadow brk-sc-honeycomb-one_hide-btn brk-sc-honeycomb-one_left">
                    <div className="brk-sc-honeycomb-one__content">
                        <h4 className="font__family-montserrat font__weight-bold font__size-24 brk-sc-honeycomb-one__header">Frame</h4>
                        <p className="font__family-open-sans font__size-16 mt-20 brk-dark-font-color brk-sc-honeycomb-one__p">Lots of frame, So that you can make a video more easily.</p>
                        <a href="#" className="vimory-btn btn">See More</a>
                    </div>
                    <div className="brk-sc-honeycomb-one__layer brk-base-bg-gradient-14"></div>
                    <div className="brk-sc-honeycomb-one__hex-1"></div>
                    <div className="brk-sc-honeycomb-one__hex-2"></div>
                </li>
                {/* <li className="feature-4 wow slideInRight" data-wow-duration="2s" data-wow-delay="2s">
                        <div className="content">
                            <h3>Frame</h3>
                            <p> Lots of frame, So that you can
make a video more easily.</p>
                            <a href="">See more</a>
                        </div>
                        <div className="hover"></div>
                    </li> */}

                {/* <div id="universe">
                    <div id="galaxy">
                        <div id="sun">
                        </div>
                        <div id="mercury" class="orbit">
                            <div className="planet"></div>
                        </div>
                    </div>
                </div> */}
            </ul>
        )
    }
}
export default Feature;