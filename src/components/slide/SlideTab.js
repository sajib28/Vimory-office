import React, { Component } from 'react';
import mobileFrame from '../../assets/img/mobile-frame.png';
import mobileFrameFilter from '../../assets/img/mobile-frame-filter.png';
import mobileFrameEffect from '../../assets/img/mobile-frame-effect.png';
import tabIconImg from '../../assets/img/filter-img-icon.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import videomp from '../../assets/media/304-641.mp4';
import videoweb from '../../assets/media/30.Love_OK.webm';
class SlideTab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultIndex={0}>

                    <div className="tab-content">
                        <TabPanel>
                            <div className="col-md-7">
                                <h3>Slide</h3>
                                <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                            </div>
                            <div className="col-md-5">
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
                        </TabPanel>
                        <TabPanel>
                            <div className="col-md-7">
                                <h3>Slide</h3>
                                <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                            </div>
                            <div className="col-md-5">
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
                        </TabPanel>
                        <TabPanel>
                            <div className="col-md-7">
                                <h3>Slide</h3>
                                <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                            </div>
                            <div className="col-md-5">
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
                        </TabPanel>
                        <TabPanel>
                            <div className="col-md-7">
                                <h3>Slide</h3>
                                <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                            </div>
                            <div className="col-md-5">
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
                        </TabPanel>
                        <TabPanel>
                            <div className="col-md-7">
                                <h3>Slide</h3>
                                <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                            </div>
                            <div className="col-md-5">
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
                        </TabPanel>
                        <TabList>
                            <Tab><div className="img-hover slide-crop"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 34.362 33.278">
                                <g id="Group_2106" data-name="Group 2106" transform="translate(-2027.163 -7307.624)">
                                    <g id="Group_2105" data-name="Group 2105" transform="translate(2028.163 7308.624)">
                                        <rect id="Rectangle_1346" data-name="Rectangle 1346" className="cls-1" width="24.748" height="24.643" transform="translate(0 0)" />
                                        <rect id="Rectangle_1347" data-name="Rectangle 1347" className="cls-2" width="24.748" height="24.643" transform="translate(7.615 6.635)" />
                                    </g>
                                </g>
                            </svg>
                            </div>
                                <span>Crop</span>
                            </Tab>
                            <Tab>
                                <div className="img-hover slide-heart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 33.439 29.943">
                                        <g id="Group_2107" data-name="Group 2107" transform="translate(-2027.646 -7309.998)">
                                            <g id="Group_2101" data-name="Group 2101" transform="translate(2028.646 7311)">
                                                <path id="Path_21981" data-name="Path 21981" className="cls-1" d="M957.534,2411.328a8.215,8.215,0,0,0-8.942-7.78c-4.113.278-6.792,4.474-6.792,4.474s-2.747-4.1-6.865-4.24a8.391,8.391,0,0,0-8.81,8.085c-.212,4.3,2.7,8.117,5.056,10.707a52.684,52.684,0,0,0,10.812,8.723,54.094,54.094,0,0,0,10.666-9.092C954.965,2419.536,957.818,2415.615,957.534,2411.328Z" transform="translate(-926.114 -2403.527)" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Heart</span>
                            </Tab>
                            <Tab><div className="img-hover slide-Slice">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38.644 35.509">
                                    <g id="Group_2108" data-name="Group 2108" transform="translate(-2024.672 -7307.772)">
                                        <g id="Group_2102" data-name="Group 2102" transform="translate(2025.422 7308.522)">
                                            <rect id="Rectangle_1336" data-name="Rectangle 1336" className="cls-1" width="7.357" height="21.256" transform="translate(7.357 12.754)" />
                                            <rect id="Rectangle_1337" data-name="Rectangle 1337" className="cls-1" width="7.331" height="21.183" transform="translate(22.122 12.71)" />
                                            <rect id="Rectangle_1338" data-name="Rectangle 1338" className="cls-2" width="7.357" height="21.256" transform="translate(0 0)" />
                                            <rect id="Rectangle_1339" data-name="Rectangle 1339" className="cls-3" width="7.571" height="21.874" transform="translate(14.432 0)" />
                                            <rect id="Rectangle_1340" data-name="Rectangle 1340" className="cls-2" width="7.571" height="21.874" transform="translate(29.573 0)" />
                                        </g>
                                    </g>
                                </svg>

                            </div>
                                <span>Slice</span></Tab>
                            <Tab>
                                <div className="img-hover slide-flip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 37.247 36.045">
                                        <g id="Group_2109" data-name="Group 2109" transform="translate(-2026.583 -7306.263)">
                                            <g id="Group_2100" data-name="Group 2100" transform="translate(2027.869 7309.088)">
                                                <path id="Path_21979" data-name="Path 21979" className="cls-1" d="M1131.455,2403.37l-12.3,15.2,12.3,15.2Z" transform="translate(-1119.16 -2403.37)" />
                                                <path id="Path_21980" data-name="Path 21980" className="cls-2" d="M1162.944,2403.37l12.3,15.2-12.3,15.2Z" transform="translate(-1140.565 -2403.37)" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Flip</span></Tab>
                            <Tab>
                                <div className="img-hover slide-kernel">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40.276">
                                        <g id="Group_2110" data-name="Group 2110" transform="translate(-2023.3 -7303.08)">
                                            <path id="Path_21990" data-name="Path 21990" className="cls-1" d="M1717.091,2433.938l-18.591-18.719,18.591-18.719,18.591,18.719Z" transform="translate(326.21 4907.999)" />
                                            <path id="Path_21991" data-name="Path 21991" className="cls-2" d="M1725.222,2432.507l-10.087-10.1,10.032-10.156,10.087,10.1Z" transform="translate(318.105 4900.326)" />
                                        </g>
                                    </svg>
                                </div>
                                <span>Kernel</span></Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default SlideTab;