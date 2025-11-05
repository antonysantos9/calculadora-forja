
import './App.module.css'
import { useState } from 'react'

function App() {
const [numero1, setNumero1] = useState()
const [numero2, setNumero2] = useState()
const [respSoma, setRespSoma] = useState()
const [respMult, setRespMult] = useState()
const [respDiv, setRespDiv] = useState()
const [respSub, setRespSub] = useState()

const soma = () => setRespSoma (parseFloat(numero1) + parseFloat(numero2))
const subtracao = () => setRespSub (parseFloat(numero1) - parseFloat(numero2))
const multiplicacao = () => setRespMult (parseFloat(numero1) * parseFloat(numero2))
const divisao = () => setRespDiv (parseFloat(numero1) / parseFloat(numero2)) 

  return (
    <>
     <h1>CALCULADORA</h1>
     <div>
      <label htmlFor="n1">Digite um Número</label>
      <input type="number" id='n1' value={numero1} onChange={(e) => setNumero1(e.target.value)} />
     </div>
     <div>
      <label htmlFor="n2">Digite um Número</label>
      <input type="number" id='n2' value={numero2} onChange={(e) => setNumero2(e.target.value)} />
     </div>

     <div>

     <div>
      <h2>RESULTADO DA SOMA</h2>
      {respSoma}
      <button onClick={soma}>SOMAR</button>
     </div>

     <div>
      <h2>RESULTADO DA SUBTRAÇAO</h2>
      {respSub}
      <button onClick={subtracao}>SUBTRAIR</button>
     </div>

     <div>
      <h2>RESULTADO DA MULTIPLICAÇAO</h2>
      {respMult}
      <button onClick={multiplicacao}>MULTIPLICAR</button>
     </div>

     <div>
      <h2>RESULTADO DA DIVISAO</h2>
      {respDiv}
      <button onClick={divisao}>DIVIDIR</button>
     </div>

     </div>
    </>
  )
}

export default App
