import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import '../styles/style.css';
import '../styles/bootstrap.css';
import React from 'react';


function Navigation() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-nouveau">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand">
                        <img className="logo-nav" src="./images/logos/GroupLogo.svg" alt="logo" height="32" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Dropdown>

                                <Dropdown.Toggle className="dropdown navig" >
                                    Bons plans

                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="./restaurants">
                                        Restaurants
                                    </Dropdown.Item>
                                    <hr className="dropdown-divider" />
                                    <Dropdown.Item href="./lifestyle">
                                        Life Style
                                    </Dropdown.Item>
                                    <hr className="dropdown-divider" />
                                    <Dropdown.Item href="./culture-aides">
                                        Culture / Aides
                                    </Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                           <NavLink to='./evenements' className="navig nav-link " >
                                Événements
                            </NavLink>
                           <NavLink to='./apropos' className="navig nav-link " >
                           À propos
                            </NavLink>
                           <NavLink to='./contact' className="navig nav-link " >
                           Contactez-nous
                            </NavLink>
                            
                           
                        </ul>
                        <section className="nav-end">
                            <Dropdown>
                                <div className="connexion">
                                    <li className="nav-item dropdown">

                                        <Dropdown.Toggle className="dropdown navig" >

                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                                className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fill-rule="evenodd"
                                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>

                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="./">Se connecter</Dropdown.Item>
                                            <hr className="dropdown-divider" />
                                            <Dropdown.Item href="./">S"inscrire</Dropdown.Item>


                                        </Dropdown.Menu>
                                    </li>


                                </div>
                            </Dropdown>

                            <div className="search">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Recherche"
                                        aria-label="Search" />
                                    <button className="btn btn-outline-success search-button" type="submit">Recherche</button>
                                </form>
                            </div>

                        </section>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navigation;
