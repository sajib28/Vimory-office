import React, { Component } from 'react';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameFilter from '../../assets/img/mobile-frame-filter.png';
import mobileFrameEffect from '../../assets/img/mobile-frame-effect.png';
import tabIconImg from '../../assets/img/filter-img-icon.png';
import videomp from '../../assets/media/304-641.mp4';
import videoweb from '../../assets/media/30.Love_OK.webm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
class TabCom extends Component {
    render() {
        return (
            <div>
                <Tabs defaultIndex={0}>

                    <div className="tab-content">
                        <TabPanel><div className="col-md-5">

                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                        <div className="video-template">
                                            <video autoPlay muted loop>
                                                <source src={videomp} type="video/webm" />
                                                <source src={videoweb} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>1. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabPanel><div className="col-md-5">
                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                    <img src={mobileFrameEffect} alt="" />
                                </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>2. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabPanel><div className="col-md-5">
                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                    <img src={mobileFrameFilter} alt="" />
                                </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>3. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabPanel><div className="col-md-5">
                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                    <img src={mobileFrameEffect} alt="" />
                                </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>4. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabPanel><div className="col-md-5">
                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="" />
                                <div className="mobile-frame-content">
                                    <img src={mobileFrameFilter} alt="" />
                                </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>5. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabList>
                            <Tab><div id="filter-1" className="img-hover"><img src={tabIconImg} alt="Aglow" /></div><span>Aglow</span></Tab>
                            <Tab><div id="filter-2" className="img-hover"><img src={tabIconImg} alt="Tring" /></div><span>Tring</span></Tab>
                            <Tab><div id="filter-3" className="img-hover"><img src={tabIconImg} alt="Duotone" /></div><span>Duotone</span></Tab>
                            <Tab><div id="filter-4" className="img-hover"><img src={tabIconImg} alt="Floral" /></div><span>Floral</span></Tab>
                            <Tab><div id="filter-5" className="img-hover"><img src={tabIconImg} alt="Sunday" /></div><span>Sunday</span></Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default TabCom;