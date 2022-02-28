import { BUILDER_KEYS } from "@babel/types";
import React, { Component } from "react";
import HeaderChiqui from "./header-chiqui";

export default class LoginChiqui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login:"",
            pwd:""
        }
    }

    onChangeHandler = (obj) => {    
        let { name, value } = obj.target;    
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div class="container">
                <HeaderChiqui />
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image">
                                        <div class="col-lg-10">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <span style={{...styleBase, ...styleAzul}} >
                                                        DENTISTAS [ 
                                                            <span style={{...styleBase, ...styleVermelho }}> ORTHO CHIQUI </span> 
                                                        ]</span>                                                                                                                                                                
                                                </div>
                                                <div class="user">
                                                    <div class="form-group">
                                                        <input 
                                                            type="login" 
                                                            class="form-control form-control-user"
                                                            value={this.login}                                                            
                                                            placeholder="LOGIN" 
                                                            onChange={value => this.onChangeHandler(value)}
                                                            />
                                                    </div>
                                                    <div class="form-group">
                                                        <input 
                                                            type="password" 
                                                            class="form-control form-control-user"
                                                            name="pwd" 
                                                            value={this.pwd}
                                                            onChange={value => this.onChangeHandler(value)}
                                                            placeholder="***"/>
                                                    </div>
                                                    <div class="from-group">
                                                        <button                                     
                                                            className="btn btn-primary"
                                                            onClick={() => this.tryLogin()}>
                                                                Entrar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

const styleBase = {
    fontWeight: 500,
    fontSize: 18
}

const styleAzul = {
    color: "blue"
}

const styleVermelho = {
    color: "red"
}