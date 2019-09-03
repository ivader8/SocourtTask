import React, { Component } from 'react'
import { Link ,Route, Redirect} from 'react-router-dom'
import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'

export default class Navbar extends Component {
    state = {
        searchLinkStyle: '',
        mySideNavStyle: 'none',
        searchBooksButtonClicked: false,
        searchGenreButtonClicked: false,
        bookSearchInput: '',
        genreSearchInput:''
    };
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        function showMenu(e) {
            e.preventDefault();
            let nav = document.getElementById('nav');
            nav.classList.toggle('hide-mobile');
        }

        function hideMenu(e) {
            e.preventDefault();
            let nav = document.getElementById('nav');
            nav.classList.add('hide-mobile');
        }

        let openNav = (e) => {
            e.preventDefault();
            this.setState({ searchLinkStyle: 'none', mySideNavStyle: '' });
            document.getElementById("mySidenav").style.width = "250px";

        }

        let closeNav = (e) => {
            e.preventDefault();
            this.setState({ searchLinkStyle: '', mySideNavStyle: 'none' });
            document.getElementById("mySidenav").style.width = "0";
        }

        let searchBookHandler = (e) => {
            e.preventDefault;
            this.setState({searchBooksButtonClicked: true})
        }
        
        let searchGenreHandler = (e) => {
            e.preventDefault;
            this.setState({searchGenreButtonClicked: true})
        }


        const{bookSearchInput, genreSearchInput}= this.state;

        if (this.state.searchBooksButtonClicked){
            return (
                <Route render={() => <Redirect to={{
                    pathname: '/books/search',
                    state: { id: bookSearchInput }
                }} />} />
            )
        } else if (this.state.searchGenreButtonClicked){
            return (
                <Route render={() => <Redirect to={{
                    pathname: '/genres/search',
                    state: { id: genreSearchInput }
                }} />} />
            )
        }
        


        return (
            <div className="container">
                <header>
                    <Link to="/"><img src={logo} alt="yBudget logo" className="logo" /></Link>
                    <nav>
                        <Link to="#" className="hide-desktop" onClick={showMenu}>
                            <img src={ham} alt="toggle menu" className="menu" id="menu" />
                        </Link>

                        <ul className="show-desktop hide-mobile" id="nav">
                            <li id="exit" className="exit-btn hide-desktop">
                                <img src={exit} alt="exit menu" onClick={hideMenu}></img></li>
                            <li><Link to="/addBook">create</Link></li>
                            <li><Link to="/books">books</Link></li>
                            <li><Link to="/genres">genres</Link></li>

                            <li>
                                <Link to="#" onClick={openNav}
                                    style={{ display: this.state.searchLinkStyle }}>search</Link>

                                <div id="mySidenav" className="sidenav"
                                    style={{ display: this.state.mySideNavStyle }}>
                                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                    <br />

                                    <input id="bookSearchInput" 
                                    placeholder="Book Title" name ="bookSearchInput" 
                                    value = {bookSearchInput} onChange={this.handleChange}/>
                                    <label className="cta" onClick = {searchBookHandler}>Search</label>
                                    <input id="genreSearchInput" 
                                    placeholder="Genre Name" name="genreSearchInput"
                                    value = {genreSearchInput} onChange={this.handleChange}/>
                                    <label href="#" className="cta" onClick = {searchGenreHandler}>Search</label>
                                </div>

                            </li>


                        </ul>
                    </nav>

                </header>
            </div>

        )
    }
}

