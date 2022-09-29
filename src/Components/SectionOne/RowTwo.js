import React from 'react'
import { HiCamera } from "react-icons/hi";
import '../../Styles/SectionOne/RowTwo.css'
import Title from './Title';
import TitleBody from './TitleBody';

const RowTwo = () => {
  return (
    <div className='row-two'>
      <div className="row-two-container">
        <div className="our-gallery-container">
            <div className="our-gallery">
                <HiCamera size={50} />
                <p>Our</p>
                <p>Gallery</p>
            </div>

        </div>
        <div className="row-two-body">
            <Title title='Furniture &' />
            <Title title='interior design' />
            <TitleBody textBody="Founded in 2017 by Terence Ngan, the studio is accustomed to creating remarkable environments." />
        </div>
      </div>
    </div>
  )
}

export default RowTwo
