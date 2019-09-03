import React, { Component, Fragment } from 'react'
import { post } from '../data/crud';
import Navbar from './navbar';


class CreateBook extends Component {

    state = {
        title: '',
        genre: '',
        author: '',
        error: ''
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, genre, author } = this.state;

        const credentials = {
            title,
            genre,
            author
        }

        this.setState({
            error: ''
        },
            async () => {
                try {
                    const result = await post('http://localhost:5000/api/book/create', credentials)

                    if (!result.success) {
                        const errors = Object.values(result.errors).join(' ');

                        throw new Error(errors);
                    }

                    this.setState({
                        title: '',
                        genre: '',
                        author: ''
                    })

                } catch (error) {
                    this.setState({
                        error: error.message,
                    })
                }
            }
        )
    }

    render() {
        const { title, genre, author, error } = this.state;

        return (
            <Fragment>
                <Navbar />
                <div className="container">
                    {
                        error.length
                            ? <div>Something went wrong: {error}</div>
                            : null
                    }
                    <h1>Create New Product</h1>

                    <form className="createForm" onSubmit={this.handleSubmit}>
                        <table cellSpacing="10">
                            <tbody>
                                <tr className="form-group">
                                    <td><label htmlFor="title">Title</label></td>
                                    <td>
                                        <input type="text" name="title" id="title"
                                            placeholder="Enter product title" value={title} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr className="form-group">
                                    <td><label htmlFor="genre">Genre</label></td>
                                    <td>
                                        <input type="text" name="genre" id="genre"
                                            placeholder="Enter genre of the book" value={genre} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr className="form-group">
                                    <td><label htmlFor="author">Author</label></td>
                                    <td>
                                        <input type="text" name="author"
                                            id="author" placeholder="Enter book author" value={author} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="right"><input type="submit" value="Create" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </Fragment>
        )
    }

}


export default CreateBook;