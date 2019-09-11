import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/filter-bg.jpg';
import TabCom from './TabCom';
import rectangle from '../../assets/img/icon/rectangle.png';
import round from '../../assets/img/icon/round.png';
class Filter extends Component {
    render() {
        return (
            <section id="filter">
                <div className="circle-position two-circle left-circle">
                    <div className="circle-wrapper">
                        <div className="orbit circle-spin">
                            <div className="first-circle">
                                <div className="outer-orbit-small">
                                    <div className="small"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BackgroundWithText id="filterBg" backgroundImage={BackgroundImage} title="Filter" shadowTitle="Filter" />
                <div className="content-area">
                <div className="vimory-animation animation-type-4 top-right">
                    <img src={rectangle} alt="Vimory" />
                    <div className="brk-animated-circle__container">
                        <img src={round} alt="Vimory" />
                    </div>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <TabCom />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Filter Section
        )
    }
}
export default Filter;