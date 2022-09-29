import { getNodeText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import '../../Styles/SectionTwo/SectionTwo.css'
import ExpandItem from './ExpandItem'
import Items from './Items'

const SectionTwo = () => {
    const [items, setItems] = useState ([
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 1900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 2900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 3900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 5,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 6,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        },
        {
          id: 7,
          img: 'https://images.unsplash.com/photo-1543512214-4f76e81f8bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          name: 'Shaken Lamp',
          price: 900,
          weight: '8kg',
          material: '95% polystar, Solid Wood',
          color: 'Bruh Green',
          catridge: 'E14',
          about: 'We are motivated by pushing the possibilities of form and exploring different techniques to challenge what exists of form exploring different techniques to challenge.'
        } 
      ])
      const [expand, setExpand] = useState(false)
      const [id, setId] = useState(0)

    const recieverId = (Id) => {
      setExpand(true)
      setId(Id - 1)
    };
    const over = (bool) => {
        setExpand(bool)
        console.log("i've been clicked: " + expand)
    }

  return (
    <div className='section-two'>
      <div className="section-two-container">
        <div className="section-two-background">
            <img src="https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1577&q=80" alt="" />
            <div className={`overlay ${expand ? 'active' : ''} `}></div>
        </div>
        <div className="section-two-body">
            <div className="section-two-body-main">
                <Items collect={recieverId} />
                <div className={`expanded-view ${!expand ? 'ex' : ''} `}>
                    <ExpandItem item={items[id]}  over={over}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
