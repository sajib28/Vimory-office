import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/solar.css';
import './assets/fontAwesome/css/fontawesome.min.css';
import './assets/fontAwesome/css/all.min.css';
import './assets/scss/main.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import AppFeature from './components/AppFeature';
import Templates from './components/Templates';
import AnimationSlider from './components/AnimationSlider';
import Effect from './components/Effect';
import PhotoEdit from './components/PhotoEdit';
import Slide from './components/Slide';
import Filter from './components/Filter';
import Frame from './components/Frame';
import GetToday from './components/GetToday';
import ClientReview from './components/ClientReview';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AppFeature />
      <Templates />
      <AnimationSlider />
      <PhotoEdit />
      <Slide />
      <Effect />
      <Filter />
      <GetToday />
      <ClientReview/>
      <Frame />
      <Pricing/>
      <Faq />
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
