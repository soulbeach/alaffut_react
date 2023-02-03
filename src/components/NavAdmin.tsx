import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import '../styles/style.css';
import '../styles/bootstrap.css';
import React from 'react';

function NavAdmin() {

    return (
        <main id="NavAdmin">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="./admin.html">
              <img className="logo-nav" src="./images/images/lobo_bleu.svg" alt="logo" height="32"/ >
            </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Commerce
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="./listecommerce.html">Liste des commerces</a></li>
                      <li><a className="dropdown-item" href="./ajoutcommerce.html">Ajouter un commerce</a></li>
                      <li><a className="dropdown-item" href="./modifcommerce.html">Modifier un commerce</a></li>
                      <li><a className="dropdown-item" href="./supprimercommerce.html">Supprimer un commerce</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Evenements
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="./listeevenement.html">Liste des évènements</a></li>
                      <li><a className="dropdown-item" href="./ajoutevenement.html">Ajouter un évènement</a></li>
                      <li><a className="dropdown-item" href="./modifevenement.html">Modifier un évènement</a></li>
                      <li><a className="dropdown-item" href="./supprimerevenement.html">Supprimer un évènement</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </main>
    )
}
export default NavAdmin;