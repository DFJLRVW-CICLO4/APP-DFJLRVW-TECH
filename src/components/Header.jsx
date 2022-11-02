import React from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../img/LogoOficial.png'

const Header = ({count}) => {

  return (
    <header>
    <a href="#">
     <div className="logo"/>      
    </a>
    <nav>
          <ul>
              <li><Link to="/" >INICIO</Link></li>
              <li><Link to="/productos" >PRODUCTOS</Link></li>
              <li><Link to="/admin" >Login</Link></li>
          </ul>
    </nav>
    <div className="cart">
        <Link to="/carrito" >
          <box-icon name="cart"></box-icon>
        </Link>
        <span className="item_total">0</span>
    </div>
</header>
  )
}

export default Header