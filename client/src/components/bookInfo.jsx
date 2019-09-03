import React, { Component } from 'react';
import { get } from '../data/crud';
import Navbar from './navbar';

class BookInfo extends Component {
    state = {
        title: '',
        genre: '',
        author: '',
        dataCreated: '',
        lastUpdated: ''
    }

    async componentDidMount() {

        try {
            const url = window.location.href;
            const idStr = url.substring(27);

            const book = await get('http://localhost:5000/api/book/' + idStr);
            console.log(book)


            this.setState({
                title: book.data.title,
                genre: book.data.genre,
                author: book.data.author,
                dataCreated: book.data.dataCreated.substring(0, 10),
                lastUpdated: book.data.lastUpdated.substring(0, 10)
            })
        } catch (error) {
            console.log(error);
        }

    }


    render() {
        return (            
            <div>
                <Navbar/>
                <table className="bookInfo">
                    <thead>
                        <th colSpan="2" align="center">Book information</th>
                        <tbody>
                            <tr><td>title:</td><td>{this.state.title}</td></tr>
                            <tr><td>genre:</td><td>{this.state.genre}</td></tr>
                            <tr><td>author:</td><td>{this.state.author}</td></tr>
                            <tr><td>date created:</td><td>{this.state.dataCreated}</td></tr>
                            <tr><td>last updated:</td><td>{this.state.lastUpdated}</td></tr>
                        </tbody>
                    </thead>
                </table>
            </div>
        )
    }
}

export default BookInfo;