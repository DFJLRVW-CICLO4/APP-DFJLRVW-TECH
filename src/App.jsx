import { useState } from 'react';
//import Header from './components/Header';
import Home from './pages/Home';
import Administrador from './pages/Administrador';
import ComprasCarrito from './pages/ComprasCarrito';
import ListaProductos from './pages/ListaProductos';
import 'boxicons';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


// Style
import './assets/css/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ListaProductos/>}/>
        <Route path='/admin' element={<Administrador/>}/>
        <Route path='/carrito' element={<ComprasCarrito/>}/>
      </Routes>
   
    </div>
  )
}

export default App
