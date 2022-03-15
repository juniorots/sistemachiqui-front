import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderChiqui from "./header-chiqui";
import "../css/custom-chiqui.css";
import "../css/sb-admin-2.css";
import "../css/sb-admin-2.min.css";


export default class MenuChiqui extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <HeaderChiqui />
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/painel">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>                    
                    <div class="sidebar-brand-text mx-3">[USUARIO LOGADO AQUI]</div>
                </Link>
            </ul>
        );
    }
}