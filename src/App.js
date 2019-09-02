import React from 'react';
import './assets/css/bootstrap.min.css';
//import './assets/css/solar.css';
import './assets/css/animate.min.css';
import './assets/fontAwesome/css/fontawesome.min.css';
import './assets/fontAwesome/css/all.min.css';
import './assets/scss/main.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import AppFeature from './components/feature/AppFeature';
import Templates from './components/templates/Templates';
import AnimationSlider from './components/AnimationSlider';
import Effect from './components/effect/Effect';
import PhotoEdit from './components/photoEdit/PhotoEdit';
import SlideSection from './components/slide/SlideSection';
import Filter from './components/filter/Filter';
import FrameSection from './components/frame/FrameSection';
import GetToday from './components/GetToday';
import ClientReview from './components/review/ClientReview';
import Pricing from './components/pricing/Pricing';
import Faq from './components/faq/Faq';
import GetInTouch from './components/getInTouch/GetInTouch';
import Footer from './components/Footer';
import WOW from 'wowjs';
function App() {
  new WOW.WOW({
    live: false
  }).init();
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AppFeature />
      <Templates />
      <AnimationSlider />
      <PhotoEdit />
      <SlideSection />
      <Effect />
      <Filter />
      <GetToday />
      <ClientReview />
      <FrameSection />
      <Pricing />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
