import React from 'react'
import '../../Styles/SectionOne/LargeImgae.css'
import { useInView } from 'react-intersection-observer';

const LargeImage = () => {
  const { ref, inView: view } = useInView();
  return (
    <div className='large-image'>
        <div className={`large-image-container ${view ? 'show' : ''}`}  ref={ref}>
            <div className="large-img">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2158&q=80" alt="largeImage" />
            </div>
        </div>
      
    </div>
  )
}

export default LargeImage
