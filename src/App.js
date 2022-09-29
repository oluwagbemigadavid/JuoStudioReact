import './App.css';
import { useRef, useEffect } from 'react'
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';

function App() {

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="app-container">
        <div className="app-section-one">
          <SectionOne />
        </div>
        <div className="app-section-two">
          <SectionTwo />
        </div>
        <div className="app-section-three">
          <SectionThree />
        </div>
        <div className="app-section-four">
          <SectionFour />
        </div>
      </div>
    </div>
  );
}

export default App;
