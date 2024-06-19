import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import logo from '../Assets/2-15.svg'
import cart from '../Assets/cart.png'
import down from '../Assets/down-arrow.png'
import { ShopContext } from '../../content/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>LET'S SHOPPING</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={down} alt="" />
        <ul ref={menuRef} className='nav-menu'>
           <li onClick={()=>{setMenu('shop')}}><Link to='/' style={{textDecoration:'none'}}>shop</Link>{menu==='shop'? <hr/> : <></>}</li>
           <li onClick={()=>{setMenu('mens')}}><Link to='/mens' style={{textDecoration:'none'}}>Man</Link>{ menu==='mens'? <hr/> : <></>}</li>
           <li onClick={()=>{setMenu('womens')}}><Link to='/womens' style={{textDecoration:'none'}}>Woman</Link>{menu==='womens'? <hr/> : <></>}</li>
           <li onClick={()=>{setMenu('kids')}}><Link to='kids' style={{textDecoration:'none'}}>Kids</Link>{menu==='kids'? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt='cart'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
