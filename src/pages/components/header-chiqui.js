import React, { Component } from "react";
import {Helmet} from "react-helmet";
import "../../css/custom-chiqui.css";
import "../../scss/volt.scss";
import "react-datetime/css/react-datetime.css";

export default class HeaderChiqui extends Component {
    render() {
        return(
            <div className="Application">
                <Helmet>                
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                        rel="stylesheet" />
                    <title>DENTISTAS [ ORTHO CHIQUI ]</title>
                </Helmet>
            </div>
        );
    }
}