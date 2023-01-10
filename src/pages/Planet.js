import logo from '../logo.svg';
import axios from 'axios';
import './Planet.css';
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const LinkToRoute = () => {
    const navigate = useNavigate();
    return (
        <button className='RouteButton' onClick={() => navigate('/profile')}>Profile</button>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: 'Loading...', planetNumber: 1}
  }

  getData = async () => {
    const body = {
      planet: this.state.planetNumber
    }
    console.log(this.props)
    this.setState({ data: 'Loading...' })
    const { data } = await axios.post('http://localhost:3001', body )
    this.setState({ data })
  }

  componentDidMount() {
    this.getData()
    console.log(this)
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
        <Link to={'/profile'} style={{color: 'white'}}>Profile</Link>
        <img src={logo}  className="App-logo" alt="logo" />
        <p className="planetName">
          {this.state.data}
        </p>
        <input disabled={this.state.data === 'Loading...'} value={this.state.planetNumber} type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e) => {
          this.setState({ planetNumber: e.target.value })
        }} />
        <LinkToRoute />
      </header>
    </div>
    )
  }
}

export default App;
