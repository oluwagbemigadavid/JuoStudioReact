import React from 'react'
import '../../Styles/SectionOne/SmallImage.css'
import { useInView } from 'react-intersection-observer';

const SmallImage = () => {
  const { ref, inView: view } = useInView();
  return (
    <div className='small-image'>
        <div className={`small-image-container ${view ? 'show' : 'diss'}`}  ref={ref}>
            <div className="small-img">
                <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="largeImage" />
            </div>
        </div>
    </div>
  )
}

export default SmallImage
