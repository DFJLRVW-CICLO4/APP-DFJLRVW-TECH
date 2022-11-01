import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import ListaProductos from './components/ListaProductos';
import 'boxicons';
//import './App.css'

// Style
import './assets/css/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ListaProductos />
      
    </div>
  )
}

export default App
