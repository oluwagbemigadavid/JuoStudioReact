import React from 'react'
import Logo from '../Logo'
import '../../Styles/SectionOne/RowOne.css'
import { FiSearch } from "react-icons/fi";

const RowOne = () => {
  return (
    <div className='row-one'>
        <div className="row-one-container">
            <Logo />
            <div className="search">  
            <div className="search-container">
                <FiSearch className='i' size={18}/>
                <input type="text" placeholder="Search.." name="search"  />
            </div>        
            </div>
        </div>
    </div>
  )
}

export default RowOne
