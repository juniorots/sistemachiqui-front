import React, { Component } from "react";
import HeaderChiqui from "./header-chiqui";
import MenuChiqui from "./menu-chiqui";

export default class HomeChiqui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prontuario:""
        }
    }
    render() {
        return (
            <div className="container">
                <HeaderChiqui />
                <div id="wrapper">
                    <MenuChiqui />
                </div>
            </div>
        );
    }
}