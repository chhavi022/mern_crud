import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import 'whatwg-fetch';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.message }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/home');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.response}</h1>
        </header>
        <p className="App-intro">
          <BrowserRouter>
            <div class = "App-nav-bar" >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/topics">Topics</Link>
              <Route exact path="/" component = {Home} />
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </div>  
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;