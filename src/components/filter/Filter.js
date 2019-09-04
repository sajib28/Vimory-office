import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import BackgroundImage from '../../assets/img/filter-bg.jpg';
import TabCom from './TabCom';
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