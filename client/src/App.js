import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import CreateBook from './components/create-book';
import Navbar from './components/navbar';
import Home from './components/home';
import AllBooks from './components/allBooks';


class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (

      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/addBook" exact component={CreateBook} />
            <Route path="/books" exact component = {AllBooks} />
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default App;
