import '../../Styles/SectionTwo/Items.css'
import { useEffect, useState } from "react";
import Item from './Item'

const Items = ({ collectItems, collect  }) => {
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
    const getId = (id) => {
        (items.map((item) => item.id === id ? collect(id) : ''))       
    }

  return (
    <div className="items-container">
        <div className='items'>
            <div className="red-banner">
                <h1>Our <br /> Gallery</h1>
                <p>
                    Designers can use photo rooms as repiration for their next project. 
                    This will allow them to create a superior interior
                </p>
            </div>
            {items.map((item) => (
                <Item
                className="items-item"
                key={item.id}
                item={item} 
                bark={getId}
                />
            ))}
        </div>
    </div>
  )
}

export default Items

