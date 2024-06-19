import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star.png'
import dull_star from '../Assets/dull_star.png'
import { ShopContext } from '../../content/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star} alt=''/>
                <img src={star} alt=''/>
                <img src={star} alt=''/>
                <img src={star} alt=''/>
                <img src={dull_star} alt=''/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                offer fashion and quality at the best price in a sustainable way. 
                H&M has since it was founded in 1947 grown into one of the world's leading fashion companies. 
                The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
        
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category : </span>Women , T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags : </span>Modern , Y2K, Old Money
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay