import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import logo from './logo.svg';

import './App.css';
import CreateBook from './components/create-book';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path = "/" exact component = {CreateBook}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
