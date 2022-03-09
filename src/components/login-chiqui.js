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
            <div className="container">
                <HeaderChiqui />
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <span style={{...styleBase, ...styleAzul}} >
                                                    DENTISTAS [ 
                                                        <span style={{...styleBase, ...styleVermelho}}> ORTHO CHIQUI </span> 
                                                    ]</span>                                                                                                                                                                
                                            </div><br />
                                            <form className="user">
                                                <div className="form-group">
                                                    <input 
                                                        type="login" 
                                                        className="form-control form-control-user"
                                                        value={this.login}                                                            
                                                        placeholder="LOGIN" 
                                                        onChange={value => this.onChangeHandler(value)}
                                                        />
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="new-password" 
                                                        className="form-control form-control-user"
                                                        name="pwd" 
                                                        value={this.pwd}
                                                        onChange={value => this.onChangeHandler(value)}
                                                        placeholder="***"/>
                                                </div>
                                                <div className="from-group">
                                                    <button                                     
                                                        className="btn btn-primary btn-user btn-block"
                                                        onClick={() => this.tryLogin()}>
                                                            Entrar
                                                    </button>
                                                </div>
                                            </form>
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
    fontWeight: 600,
    fontSize: 18
}

const styleAzul = {
    color: "blue"
}

const styleVermelho = {
    color: "red"
}