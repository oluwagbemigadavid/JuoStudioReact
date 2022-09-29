import React from 'react'
import '../../Styles/SectionOne/Title.css'
import { useInView } from 'react-intersection-observer';

const Title = ({title}) => {
  const { ref, inView: view } = useInView();
  return (
    <div className='title'>
      <div className={`title-container ${view ? 'show' : 'diss'}`}  ref={ref}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title
