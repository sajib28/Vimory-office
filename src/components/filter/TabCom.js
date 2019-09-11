import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import mobileFrame from '../../assets/img/mobile-frame.png';
import tabIconImg1 from '../../assets/img/filter/filter-icon1.png';
import tabIconImg2 from '../../assets/img/filter/filter-icon2.png';
import tabIconImg3 from '../../assets/img/filter/filter-icon3.png';
import tabIconImg4 from '../../assets/img/filter/filter-icon4.png';
import tabIconImg5 from '../../assets/img/filter/filter-icon5.png';
import Filter1 from '../../assets/img/filter/Perpetua.jpg';

import Filter2 from '../../assets/img/filter/Mid-generation.jpg';
import Filter3 from '../../assets/img/filter/Hue-4.jpg';
import Filter4 from '../../assets/img/filter/moon.jpg';
import Filter5 from '../../assets/img/filter/Duotone.jpg';






class TabCom extends Component {
    render() {
        return (
            <div>
                <Tabs defaultIndex={0}>

                    <div className="tab-content">
                        <TabPanel><div className="col-md-5">

                            <div className="mobile-frame">
                                <img src={mobileFrame} alt="Vimory Filter" />
                                <div className="mobile-frame-content">
                                        <img src={Filter1} alt="Vimory Filter"/>
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
                                <img src={Filter2} alt="Vimory Filter"/>
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
                                <img src={Filter3} alt="Vimory Filter"/>
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
                                <img src={Filter4} alt="Vimory Filter"/>
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
                                <img src={Filter5} alt="Vimory Filter"/>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-7">
                                <h3>Filter</h3>
                                <p>5. Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>

                            </div>
                        </TabPanel>
                        <TabList>
                            <Tab><div id="filter-1" className="img-hover"><img src={tabIconImg1} alt="Aglow" /></div><span>Perpetua</span></Tab>
                            <Tab><div id="filter-2" className="img-hover"><img src={tabIconImg2} alt="Tring" /></div><span>Tring</span></Tab>
                            <Tab><div id="filter-3" className="img-hover"><img src={tabIconImg3} alt="Duotone" /></div><span>Hue</span></Tab>
                            <Tab><div id="filter-4" className="img-hover"><img src={tabIconImg4} alt="Floral" /></div><span>Moon</span></Tab>
                            <Tab><div id="filter-5" className="img-hover"><img src={tabIconImg5} alt="Sunday" /></div><span>Sunday</span></Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default TabCom;