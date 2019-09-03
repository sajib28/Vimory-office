import React, { Component } from 'react';
import BackgroundWithText from '../CommonTools/BackgroundWithText';
import SecondHeader from '../CommonTools/SecondHeader';
import AnimationSlider from './AnimationSlider';
import BackgroundImage from '../../assets/img/template-bg.jpg';
class Templates extends Component {
    render() {
        return (
            // Start Template Section
            <section id="template">
<SecondHeader/>
                <BackgroundWithText id ="templateBg" backgroundImage={BackgroundImage} title="Templates" shadowTitle="Templates"/>
                <AnimationSlider/>
            </section>
            // End Template Section
        );
    }
}

export default Templates;