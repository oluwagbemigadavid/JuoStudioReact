import React from 'react';
// import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../Styles/SectionThree.css';
import Button from './Button';
import LargeImage from './SectionOne/LargeImage';
import SmallImage from './SectionOne/SmallImage';
import Title from './SectionOne/Title';
import TitleBody from './SectionOne/TitleBody';

const SectionThree = () => {
  const { ref, inView: showYear } = useInView();

/*OG way of intersection observer in react   

  const myRef = useRef();
  const [showYear, setShowYear] = useState();
  console.log(showYear)
  useEffect(() => {
    const observer = new IntersectionObserver ((entries) => {
      const entry = entries[0];
      setShowYear(entry.isIntersecting)
    })
    observer.observe(myRef.current);
  }, []) */
  return (
    <div className='section-three'>
      <div className="section-three-container">
        <div className="year-container">
            <div className={`year ${ showYear ? 'show' : ''}`} ref={ref} >
                <h2>JUO</h2>
                <p>Studio</p>
            </div>
        </div>
        <div className="section-three-body">     
          <div className="section-three-left">
            <div className="section-three-body-main">
                  <Title title='About'/>
                  <TitleBody textBody="An expandned design studio with a main stage and loft offer customers a space to show their furniture design ideas, and
                                      access a design team who work closely with them to develop their unique vision fo their space." 
                                     />
                  
                  <div className="section-three-btn">
                    <Button />
                  </div>
              </div>
              <div className="section-three-image-container">
                  <LargeImage />                
                  <div className="section-three-small-image">                        
                      <SmallImage />
                  </div>
            </div>  
          </div>     
          <div className="section-three-right">
            <div className="section-three-right-img-container">              
              <div className="section-three-right-img">
                <LargeImage/>
              </div>            
            </div>            
          </div>   
        </div>
 
      </div>
      
    </div>
  )
}

export default SectionThree
