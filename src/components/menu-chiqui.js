import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderChiqui from "./header-chiqui";

export default class MenuChiqui extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <HeaderChiqui />
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/painel">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>                    
                    <div className="sidebar-brand-text mx-3">[USUARIO LOGADO AQUI]</div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li class="nav-item active">
                    <Link className="nav-link" to="/painel">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Pessoal
                </div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Pacientes</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">[ LISTAR ] Pacientes</h6>
                            <Link className="collapse-item" to="buttons.html">Buttons</Link>
                            <Link className="collapse-item" to="cards.html">Cards</Link>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}