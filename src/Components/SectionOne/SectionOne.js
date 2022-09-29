import React from 'react'
import Carousel from './Carousel'
import RowOne from './RowOne'
import '../../Styles/SectionOne/SectionOne.css'
import RowTwo from './RowTwo'
import RowThree from './RowThree'

const SectionOne = () => {
  return (
    <div className='section-one-container'>
      <RowOne />
      <Carousel className="carousel" />
      <RowTwo />
      <RowThree className="row-three" />
    </div>
  )
}

export default SectionOne
