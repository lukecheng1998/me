import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Button from "@material-ui/core/Button";

//MUI
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//Import the logo here
import logo from "../images/favicon.ico";
import MyButton from "./MyButton";
import HomeIcon from "@material-ui/icons/Home";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
const styles = makeStyles((theme) => ({
  ...theme.spreadThis,

  root: {
    flexGrow: 1,
  },
  iconSpacing: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  },
}));
class Navbar extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const classes = styles;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <ToolBar>
            <img src={logo} alt="logo" className={classes.logo} />
            <Fragment>
              <Link to="/" >
                <Button tip="Home" component={Link} to="/">
                  <HomeIcon edge="start" className={classes.iconSpacing} />
                </Button>
              </Link>
              <Link>
                <Button tip="Projects" component={Link} to="/Projects">
                  <CollectionsBookmarkIcon />
                </Button>
              </Link>
              <Link>
                <Button tip="About" component={Link} to="/About">
                  <AccountBoxIcon />
                </Button>
              </Link>
              <Link>
                <Button tip="Other" component={Link} to="/Other">
                  <MoreHorizIcon />
                </Button>
              </Link>
            </Fragment>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}
// fill in your links style={{fill: "white"}}
export default Navbar;
