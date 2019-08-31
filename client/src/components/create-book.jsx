import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import CreateService from '../services/createService';
// import { UserConsumer } from './contexts/user-context';
import { post } from '../data/crud';


class CreateBook extends Component {
    static createService = new CreateService();

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
            <main>
                <div class="container">
                    {
                        error.length
                            ? <div>Something went wrong: {error}</div>
                            : null
                    }
                    <h1>Create New Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title"
                                placeholder="Enter product title" value={title} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" name="genre" id="genre"
                                placeholder="Enter genre of the book" value={genre} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="description">Author</label>
                            <input type="text" name="author"
                                id="author" placeholder="Enter book author" value={author} onChange={this.handleChange} />
                        </div>
                        
                        
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </main>
        )
    }

}

// const CreateBookWithContext = (props) => {
//     return (
//         <UserConsumer>
//             {
//                 ({ isLoggedIn }) => (

//                     <CreateBook
//                         {...props}
//                         isLoggedIn={isLoggedIn}

//                     />
//                 )
//             }
//         </UserConsumer>
//     )
// }

// export default CreateBookWithContext;


export default CreateBook;