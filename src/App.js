import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react'



function App() {
  const [data, setData] = useState('Loading...')
  const [planetNumber, setPlanetNumber] = useState(1)


useEffect(() => {
  const fetch = async () => {
    const body = {
      planet: planetNumber
    }
    setData('Loading...')
    const { data } = await axios.post('http://localhost:3001/', body )
    setData(data)
  }

  fetch()
}, [planetNumber])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <input value={planetNumber} type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e) => {
          setPlanetNumber(e.target.value)
        }} />
      </header>
    </div>
  );
}

export default App;
