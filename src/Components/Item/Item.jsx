import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item rounded-xl shadow-xl'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default Item