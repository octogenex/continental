import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./component/module/AppAppBar";

import { withCookies, CookiesProvider } from "react-cookie";

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path="/" component={PrimarySearchAppBar} />
      </CookiesProvider>
    </BrowserRouter>
  );
}
export default withCookies(App);
