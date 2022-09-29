import React from 'react'
import { HiOutlineServer } from 'react-icons/hi'
import { BsArrowUpRight } from 'react-icons/bs'
import '../../Styles/SectionOne/Award.css'

const Award = () => {
  return (
    <div className='award'>
    <div className="award-container">
        <div className="award-contents">
            <HiOutlineServer  size={50} style={{position: 'absolute'}} />
            <div className="texts">
                <p>Design</p>
                <p>Award</p>
            </div>
            <BsArrowUpRight size={50}  style={{position: 'absolute',}}  className="arrow"/>
        </div>
    </div>
    </div>
  )
}

export default Award
