import React from 'react'
import '../../Styles/SectionOne/TitleBody.css'
import { useInView } from 'react-intersection-observer';

const TitleBody = ({ textBody }) => {
  const { ref, inView: view } = useInView();
  return (
    <div className='title-body'>
      <div className={`title-body-container ${view ? 'show' : ''}`}  ref={ref}>
        <p>{textBody}</p>
      </div>
    </div>
  )
}

export default TitleBody
