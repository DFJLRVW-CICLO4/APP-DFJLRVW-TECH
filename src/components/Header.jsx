import React from 'react'
import imgLogo from '../img/LogoOficial.png'

const Header = ({count}) => {

  return (
    <header>
    <a href="#">
     <div className="logo"/>      
    </a>
    <ul>
        <li>
            <a href="#" >INICIO</a>
        </li>
        <a href="#"> PRODUCTOS</a>
    </ul>
    <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
    </div>
</header>
  )
}

export default Header