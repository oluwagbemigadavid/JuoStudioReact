import React from 'react'
import Title from './SectionOne/Title'
import '../Styles/SectionFour.css'
import Logo from './Logo'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineBehanceSquare } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineDribbble } from 'react-icons/ai'
import { AiTwotoneCopyrightCircle } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';

const SectionFour = () => {
  const { ref, inView: view } = useInView();
  return (
    <div className='section-four'>
      <div className="section-four-container">
        <div className={`section-four-title ${view ? 'show' : ''}`}  ref={ref}>
          <div className="section-four-title-container">
            <Title title="Lets's have a chat!" />
            <Title title="Lets's have a chat!" />
          </div>
        </div>
        <div className="section-four-body">
          <div className="section-four-body-container">
            <div className="row-one">
              <div className="column-01">
                <Logo />
                <h5>The addition of larger design sutdios, offering customers private space</h5>
              </div>
              <div className="column-02">
                <h3>Sitemap</h3>
                <div className="list">                
                  <p>Objects</p>
                  <p>About</p>
                  <p>Our gallery</p>
                  <p>Contacts</p>
                </div>
              </div>
              <div className="column-03">
                <h3>Contact</h3>
                <div className="list">                
                  <p>www.halo-lab.com</p>
                  <p>UK: +38 0665438912</p>
                  <p>mail@halo-lab.com</p>
                  <p>Ukraine, Odessa, 65058</p> 
                </div>              
              </div>
            </div>     
            <div className="row-two">
              <div className="row-tow-left">                
                <AiTwotoneCopyrightCircle color='black'  size={80}/>
                <div className="texts">
                  <p>2021 Halo Lab</p>
                  <p>	&copy; All right reserved</p>
                </div>
              </div>
              <div className="row-two-right">
                <AiOutlineFacebook  size={50}/>
                <AiOutlineBehanceSquare  size={50}/>
                <AiOutlineLinkedin  size={50}/>
                <AiOutlineInstagram  size={50}/>
                <AiOutlineDribbble  size={50}/>
              </div>
            </div>       
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
