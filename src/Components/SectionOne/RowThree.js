import React from 'react'
import '../../Styles/SectionOne/RowThree.css'
import Button from '../Button';
import LargeImage from './LargeImage'
import SmallImage from './SmallImage'
import Title from './Title';
import TitleBody from './TitleBody';
import { useInView } from 'react-intersection-observer';

const RowThree = () => {
  const { ref: myRef, inView: showYear } = useInView();
  return (
    <div className='row-three'>
      <div className="row-three-container">
        <div className="year-container">
            <div className={`year ${ showYear ? 'show' : ''}`} ref={myRef}  >
                <h2>2017</h2>
                <p>since</p>
            </div>
        </div>
        <div className="row-three-body">
            <div className="row-three-image-container">
                <LargeImage />
                <div className="row-three-image-texts">
                    <p>SOCIAL HANDLES</p>
                    <p>@KoningDavid_I</p>
                </div>                
                <div className="row-three-small-image">                        
                    <SmallImage />
                </div>
            </div>            
            <div className="row-three-body-main">
                <Title title='Objects' />
                <TitleBody textBody="We are motivated by pushing the possibilities of form and exploring differnent techniques to challenge what exists." />
                <Button />
            </div>
        </div>
      </div>
    </div>
  )
}

export default RowThree
