import React from 'react'
import '../../Styles/SectionOne/Carousel.css'
import Award from './Award'
import Menu from './Menu'

const Carousel = () => {
  return (
    <div className='carousel'>
      <div className="carousel-container">
        <div className="image-background">
            <div className="image-container">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="image" />
                </div>
            </div>
            <div className="overlay"></div>
        </div>
        <div className="carousel-contents">                
            <Menu />
            <Award />
        </div>
      </div>
    </div>
  )
}

export default Carousel
