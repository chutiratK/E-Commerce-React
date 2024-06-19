import React from 'react'
import './Breadcrum.css'
import arrow_Next from '../Assets/arrow_breadcrum.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_Next} alt=''/> SHOP <img src={arrow_Next} alt=''/> {product.category} <img src={arrow_Next} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum