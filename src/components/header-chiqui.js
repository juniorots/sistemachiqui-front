import React, { Component } from "react";
import {Helmet} from "react-helmet";

export default class HeaderChiqui extends Component {
    render() {
        return(
            <div className="Application">
                <Helmet>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                                        
                    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                        rel="stylesheet" />

                    <link href="../css/sb-admin-2.css" rel="stylesheet" />
                    <link href="../css/sb-admin-2.min.css" rel="stylesheet" />

                    {/* <script src="../vendor/jquery/jquery.min.js" />
                    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js" />

                    <script src="../vendor/jquery-easing/jquery.easing.min.js" />

                    <script src="../js/sb-admin-2.min.js" /> */}
                </Helmet>
            </div>
        );
    }
}