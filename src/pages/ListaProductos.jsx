import React from 'react'
import Header from '../components/Header';
import productosJSON from "../assets/json/productos.json";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })


const ListaProductos = () => {
  return (
<>
<Header/>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">

{
            productosJSON.map( producto =>{
                return(
                    <div className="producto">
                        <a href="#">
                            <div className="producto_img">
                                <img className="producto_img" src={`src/img/${producto.url}`} alt=""/>                                  
                            </div>              
                        </a>

                        <div className="producto_footer">
                            <h1> {producto.descripcion}</h1>
                            <p> {producto.categoria}</p>
                            <p className="precio">{formatter.format(producto.valor)}</p>
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
                )
            })
}



        </div>
        </>
  )
}

export default ListaProductos