import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'

export default class Navbar extends Component {
    state = {
        searchLinkStyle: '',
        mySideNavStyle: 'none'
    };

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
                            <li><Link to="/addBook">add book</Link></li>
                            <li><Link to="/books">books</Link></li>
                            <li><Link to="/">genres</Link></li>

                            <li>
                                <Link to="#" onClick={openNav}
                                    style={{ display: this.state.searchLinkStyle }}>search</Link>

                                <div id="mySidenav" className="sidenav"
                                    style={{ display: this.state.mySideNavStyle }}>
                                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                    <br />
                                    <br />
                                    <br />

                                    <fieldset>
            <input class="radioInput" type="radio" name="payment_method" value="bookRadioField"/><label>Book</label>                            
            </fieldset>
            
            <fieldset>
            <input class="radioInput" type="radio" name="payment_method" value="genreRadioField" checked="checked"/><label>Genre</label>
            </fieldset>

                                    {/* <div><input type="radio" name="title"/><label>Genre</label></div>	 */}

                                    {/* <span class="radio"><input type="radio" name="gender" value="bookRadio" />Book</span>
                                            <input type="radio" name="gender" value="genreRadio" />Genre
                                    <input type="text" name="Book" id="bookInputField" placeholder="Enter Value"></input>
                                            <br></br> */}

                                    <a href="#" className="cta">Search</a>
                                </div>
                            </li>


                        </ul>
                    </nav>

                </header>
            </div>

        )
    }
}

