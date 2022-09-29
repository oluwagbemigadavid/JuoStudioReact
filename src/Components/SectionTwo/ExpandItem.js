import React from 'react'
import '../../Styles/SectionTwo/ExpandItem.css'
import Item from './Item'

const ExpandItem = ({item, over}) => {
  return (
    <div className='expand-item'>
        <div className="expand-item-container">
            <div className="left">
                <div className="left-container">
                    <div className="left-contents">
                        <Item item={item} />
                    </div>
                </div>                
            </div>
            <div className="right">
                <div className="right-container">
                    <div className="right-contents">
                        <div className="right-item">
                            <p>Weight</p>
                            <p>{item.weight}</p>
                        </div>
                        <div className="right-item">
                            <p>material</p>
                            <p>{item.material}</p>
                        </div>
                        <div className="right-item">
                            <p>color</p>
                            <p>{item.color}</p>
                        </div>
                        <div className="right-item">
                            <p>catridge</p>
                            <p>{item.catridge}</p>
                        </div>
                        <h4>{item.about}</h4>
                        <div className="close" onClick={() => over(false)}>
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpandItem
