import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='py-16 px-28'>
        <h1 className='text-4xl font-semibold text-center pb-10 tracking-wide'>PRODUK TERLARIS DI ALPHA CLOTHES</h1>
        <div className="grid grid-cols-3 gap-10">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} description={item.description}/>
            })}
        </div>
    </div>
  )
}

export default Popular