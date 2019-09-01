import React, { Component, Fragment } from 'react'
import BooksService from '../services/books-service';
import Loading from './loading';
import  BookCard from './bookCard';


class AllBooks extends Component {
    state = {
        books: [],
        isLoading: false
    }

    static service = new BooksService();
    
    async componentDidMount(){
        try{
            const books = await AllBooks.service.getAllBooks();
            this.setState({books});
        } catch(error){
            console.log(error);
        }
    }

    render() {
       
    const {books, isLoading} =this.state;

    if (isLoading){
        return <Loading></Loading>
    }

    if (!books.length && !isLoading){
        return (
            <div>
                <br />
                <h2>No books</h2>
            </div>
        )
    }

    return (
        <Fragment>
        <h2 align="center" className = "headline">Our Books:</h2>
        <br />
            <div className = "cards">
                {
                    books.map(book => (
                        <BookCard key={book.id}{...book} />
                    ))
                }
            </div>
    </Fragment>
    );
    }

    
}


export default AllBooks;