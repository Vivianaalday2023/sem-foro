import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [color, setColor] = useState (null);

  const handleClick = (color) => { 
    setColor (color);
  }

  return (
    <>
      <div id='semaforo'>
        <div className= {"circulo rojo " + ((color === "rojo") ? "encendido" : "")} onClick={()=> handleClick ("rojo")}></div>
        <div className={"circulo amarillo "+ ((color === "amarillo") ? "encendido" : "")} onClick={()=> handleClick ("amarillo")}></div>
        <div className= {"circulo verde " + ((color === "verde") ? "encendido" : "")} onClick={()=> handleClick ("verde")}></div>


      </div>
    </>
  )
}

export default App
