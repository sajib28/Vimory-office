import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/solar.css';
import './assets/css/animate.min.css';
import './assets/fontAwesome/css/fontawesome.min.css';
import './assets/fontAwesome/css/all.min.css';
import './assets/scss/main.css';
import Header from './components/CommonTools/Header';
import Welcome from './components/welcome/Welcome';
import AppFeature from './components/feature/AppFeature';
import SecondHeader from './components/CommonTools/SecondHeader';
import Templates from './components/templates/Templates';
import Effect from './components/effect/Effect';
import PhotoEdit from './components/photoEdit/PhotoEdit';
import SlideSection from './components/slide/SlideSection';
import Filter from './components/filter/Filter';
import FrameSection from './components/frame/FrameSection';
import GetToday from './components/getToday/GetToday';
import ClientReview from './components/review/ClientReview';
import Pricing from './components/pricing/Pricing';
import Faq from './components/faq/Faq';
import GetInTouch from './components/getInTouch/GetInTouch';
import Footer from './components/CommonTools/Footer';
import WOW from 'wowjs';

function App() {
  new WOW.WOW({
    live: false,
    mobile:false,
  }).init();

  return (
    

    <div className="App">
      <Header />
      <Welcome />
      <AppFeature />
      <SecondHeader/>
      <Templates />
      <PhotoEdit />
      <SlideSection />
     <Effect />
      <FrameSection />
      <Filter />
      <GetToday />
      <ClientReview />
      <Pricing />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
