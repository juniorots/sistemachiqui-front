import React, { Component, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "../../routes";

// resources
import Presentation from "../Presentation";
import Forms from "./Forms";
import NotFoundPage from "../examples/NotFound";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

import HeaderChiqui from "./header-chiqui";
import MenuChiqui from "./menu-chiqui";

const RouteWithLoader = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
    );
  };

  const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    const localStorageIsSettingsVisible = () => {
      return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
      localStorage.setItem('settingsVisible', !showSettings);
    }
  
    return (
      <Route {...rest} render={props => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />
  
          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
        </>
      )}
      />
    );
  };

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
                <Routes>
                    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />

                    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
                </Routes>
            </div>
        );
    }
}