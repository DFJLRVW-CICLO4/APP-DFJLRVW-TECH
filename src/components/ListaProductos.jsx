import React from 'react'
import imgProduct from '../img/MonitorG.jpg';

const ListaProductos = () => {
  return (
<>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">
            <div className="producto">
            <a href="#">
            <div className="producto_img">
            <img src={imgProduct} alt=""/>
            </div>
            </a>
            <div className="producto_footer">
                <h1> Monitor Gamer</h1>
                <p> Categoria</p>
                <p className="precio">$600.000</p>
            </div>
            <div className="bottom">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                <a href="#" className="btn">Vista</a>
                </div>
            </div>
            </div>
        </div>
        </>
  )
}

export default ListaProductos