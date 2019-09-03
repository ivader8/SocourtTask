import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import CreateBook from './components/create-book';
import Home from './components/home';
import AllBooks from './components/allBooks';
import BookInfo from './components/bookInfo';
import AllGenres from './components/allGenres';
import GenreInfo from './components/genreInfo';
import BooksSearch from './components/booksSearch';
import GenresSearch from './components/genresSearch';


class App extends Component {
  state = {
    response: ''
  };


  render() {
    return (

      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/addBook"  component={CreateBook} />
            <Route path = "/books/search" component = {BooksSearch}/>
            <Route path = "/genres/search" component = {GenresSearch}/>
            <Route path="/books"  component = {AllBooks} />
            <Route path = "/book/:id" component = {BookInfo}/>
            <Route path="/genres"  component = {AllGenres} />
            <Route path = "/genre/:id" component = {GenreInfo}/>
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default App;
