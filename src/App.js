import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: 'Loading...', planetNumber: 1}
  }

  getData = async () => {
    const body = {
      planet: this.state.planetNumber
    }
    this.setState({ data: 'Loading...' })
    const { data } = await axios.post('http://localhost:3001/', body )
    this.setState({ data })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.planetNumber !== this.state.planetNumber) {
      this.getData()
    }
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="planetName">
          {this.state.data}
        </p>
        <input value={this.state.planetNumber} type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e) => {
          this.setState({ planetNumber: e.target.value })
        }} />
      </header>
    </div>
    )
  }
}

export default App;
