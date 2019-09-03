import React, { Component, Fragment } from 'react'
import BooksService from '../services/books-service';
import Loading from './loading';
import BookCard from './bookCard';
import Navbar from './navbar';


class AllBooks extends Component {
    state = {
        books: [],
        isLoading: false
    }

    static service = new BooksService();

    async componentDidMount() {
        try {
            const books = await AllBooks.service.getAllBooks();
            this.setState({ books });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const { books, isLoading } = this.state;

        if (isLoading) {
            return <Loading></Loading>
        }

        if (!books.length && !isLoading) {
            return (
                <Fragment>
                    <Navbar />
                    <div>
                        <br />
                        <h2>No books</h2>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <Navbar />
                <h2 align="center" className="headline">Our Books:</h2>
                <div className="bookInfo"></div>
                <br />
                <div className="cards">
                    {
                        books.map(book => (
                            <BookCard key={book._id}{...book} />
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}


export default AllBooks;