import React, { Component } from 'react';
import { get } from '../data/crud';

class GenreInfo extends Component {

    state = {
        name: '',
        books: [],
        dataCreated: '',
        lastUpdated: ''
    }

    async componentDidMount() {
        try {
            const url = window.location.href;
            const idStr = url.substring(27);

            const genre = await get('http://localhost:5000/api/genre/' + idStr);
            console.log(genre)

            this.setState({
                name: genre.data.name,
                books: genre.data.books,
                dataCreated: genre.data.dataCreated.substring(0, 10),
                lastUpdated: genre.data.lastUpdated.substring(0, 10)

            })


        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                <table className="bookInfo">
                    <th colSpan="2" align="center">Genre information</th>
                    <tbody>
                        <tr><td>Name:</td><td>{this.state.name}</td></tr>
                        <tr><td>books:</td><td>{this.state.books.join(', ')}</td></tr>
                        <tr><td>date created:</td><td>{this.state.dataCreated}</td></tr>
                        <tr><td>last updated:</td><td>{this.state.lastUpdated}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GenreInfo;