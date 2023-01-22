import React, { useState } from 'react';
import './css/App.css';
import "./css/calculadora.css";
import "./css/total.css"

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  
  const [historial, setHistorial] = useState("")

  const calculoDisplay = value => {
    setCalc(calc + value);
  }
  const equal = () => {
    setResult(eval(calc))
    setCalc(eval(calc))
    setHistorial(historial.concat(calc.concat("=", result)));
    console.log(historial)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className='total-container'>
            <div>
              <span className="screen">{calc}</span>
              
            </div>
            <div className="contenedor">
              <div className="calculator-numbers">
                <button onClick={() => calculoDisplay(7)}>7</button>
                <button onClick={() => calculoDisplay(8)}>8</button>
                <button onClick={() => calculoDisplay(9)}>9</button>
                <button onClick={() => calculoDisplay(4)}>4</button>
                <button onClick={() => calculoDisplay(5)}>5</button>
                <button onClick={() => calculoDisplay(6)}>6</button>
                <button onClick={() => calculoDisplay(1)}>1</button>
                <button onClick={() => calculoDisplay(2)}>2</button>
                <button onClick={() => calculoDisplay(3)}>3</button>
                <button className="cero" onClick={() => calculoDisplay(0)}><span>0</span></button>
                <button onClick={() => calculoDisplay(".")}>.</button>
              </div>
              <div className="calculator-operations">
                <button onClick={() => calculoDisplay("/")}>÷</button>
                <button onClick={() => calculoDisplay("*")}>×</button>
                <button className="menos" onClick={() => calculoDisplay("-")}>-</button>
                <button onClick={() => calculoDisplay("+")}>+</button>
                <button onClick={equal}>=</button>
              </div>
              <div className="extrabtn">
                <button className="ac" onClick={() => setCalc("") & setResult("")}>AC</button>
                <button onClick={() => setCalc(calc * -1)}>+/-</button>
                <button className="porcentaje" onClick={() => setCalc(calc / 100)}>%</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
