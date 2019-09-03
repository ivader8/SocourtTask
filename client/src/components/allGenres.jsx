import React, { Component, Fragment } from 'react'
import { get } from '../data/crud';
import Loading from './loading';
import GenreCard from './genreCard';

class AllGenres extends Component {

    state = {
        genres: [],
        isLoading: false
    }

    async componentDidMount() {
        try {
            const genres = await get("http://localhost:5000/api/genres");
            this.setState({ genres });
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        const { genres, isLoading } = this.state;

        if (isLoading) {
            return <Loading></Loading>
        }

        if (!genres.length && !isLoading) {
            return (
                <div>
                    <br />
                    <h2>No genres</h2>
                </div>
            )
        }

        return (
            <Fragment>
                <h2 align="center" className="headline">Our Genres:</h2>
                <div></div>
                <br />
                <div className="cards">
                    {
                        genres.map(genre => (
                            <GenreCard key={genre._id}{...genre} />
                        ))
                    }
                </div>
            </Fragment>
        )
    }
}

export default AllGenres;