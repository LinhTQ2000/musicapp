import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginCallback from "./component/LoginCallBack";
import Navbar from "./component/Navbar";
import Player from "./component/Player/Player";
import Search from "./component/Search/Search";
import Main from "./component/Main";
import * as RouteConstant from "./constants/RouteConstant";
import "./App.css";
import Auth from "./utils/auth";
function App() {
  Auth.setTokenToSpotify();
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <div className="content">
          <Search />
          <Main />
          <Routes>
            <Route
              path={RouteConstant.LOGIN_CALLBACK}
              component={LoginCallback}
            />
          </Routes>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default App;
