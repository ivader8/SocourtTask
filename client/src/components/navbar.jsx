import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'

export default class Navbar extends Component {
     

    render() {
        function showMenu(e){
        e.preventDefault();
        let nav = document.getElementById('nav');
        nav.classList.toggle('hide-mobile');
    }

    function hideMenu(e){
        e.preventDefault();
        let nav = document.getElementById('nav');
        nav.classList.add('hide-mobile');
    }

    function openSearchMenu(e){
        e.preventDefault();

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
                                <img src={exit} alt = "exit menu" onClick={hideMenu}></img></li>
                            <li><Link to="/addBook">add book</Link></li>
                            <li><Link to="/books">books</Link></li>
                            <li><Link to="/">genres</Link></li>
                        <li><Link to="/" onClick={openSearchMenu}>search</Link></li>

                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

