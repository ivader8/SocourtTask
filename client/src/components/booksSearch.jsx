import React, { Component, Fragment } from 'react'
import Navbar from './navbar';
import BooksService from '../services/books-service';
import BookCard from './bookCard';
import {post} from '../data/crud'

class BooksSearch extends Component {

    state = {
        books: [],
        searchParam: this.props.location.state.id
    }

    

    // static service = new BooksService;

    async componentDidMount(){
        try {      
            const {searchParam} = this.state;    
            const books = await post("http://localhost:5000/api/books");
            const filteredBooks = books.filter(function(book) {
                return book.title.includes(searchParam);
            });
            this.setState({ books:filteredBooks });
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        const {books} = this.state;
        return (
            <Fragment>
                <Navbar></Navbar>
                <h2 align="center" className="headline">Results:</h2>
                <div className="cards">
                    {
                        books.map(book => (
                            <BookCard key={book._id}{...book} />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default BooksSearch;