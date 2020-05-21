import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Other from "./pages/Other";

import themeFile from "./components/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme(themeFile);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Other" component={Other} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
