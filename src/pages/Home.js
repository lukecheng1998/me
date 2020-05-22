import React, { Component, Fragment } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import portrait from "../images/portrait.jpg";
import talkpurdue from "../images/talkpurdue.png";
import twistter307 from "../images/twistter307.png";
import honestly from "../images/honestly.png";
const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  image: {
    width: 700,
    height: 700,
    objectFit: "cover",
    maxWidth: "100%",
    borderRadius: "50%",
    align: "center",
  },
  cardRoot: {
    minWidth: 100,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 14,
  },
  cardControl: {
    padding: theme.spacing(2),
    marginBottom: "20px",
  },
  imageStyles: {},
 
}));
export class Home extends Component {
  render() {
    const classes = useStyles;
    return (
      <div>
        <Grid className={classes.root}>
          <Grid item sm />
          <Grid item sm>
            <Typography
              variant="h2"
              className={classes.pageTitle}
              align="center"
            >
              Luke Cheng
            </Typography>
            <Typography
              variant="h4"
              className={classes.pageTitle}
              align="center"
            >
              Hello learn about me and my projects here!
            </Typography>
          </Grid>

          <Grid container spacing={0} alignItems="center" justify="center">
            <div className={classes.image}>
              <img
                src={portrait}
                alt="portrait"
                width="200"
                height="200"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid className={classes.cardControl}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.cardRoot}>
                <Typography
                  className={classes.cardTitle}
                  variant="h5"
                  component="h2"
                  align="center"
                  gutterBottom
                >
                  My Projects
                </Typography>
                <CardContent>
                  <h4 align="center">Talk Purdue</h4>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <img
                      src={talkpurdue}
                      width="500"
                      height="300"
                      alt="talkpurdue"
                    />
                  </Grid>
                  <h4 align="center">Twistter</h4>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <img
                      src={twistter307}
                      width="500"
                      height="300"
                      alt="twistter"
                    />
                  </Grid>
                  <h4 align="center">Honestly</h4>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <img
                      src={honestly}
                      width="500"
                      height="300"
                      alt="twistter"
                    />
                  </Grid>
                </CardContent>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  marginBottom="20"
                >
                  <Button
                    variant="contained"
                    component={Link}
                    color="#FFFFF"
                    to="/Projects"
                  >
                    View All
                  </Button>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.cardRoot}>
                <Typography
                  className={classes.cardTitle}
                  variant="h5"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  About Me!
                </Typography>
                <CardContent>
                  <Typography 
                  variant="p"
                  gutterBottom
                  align="center">
                    Hello, I love learning about the world. Currently I am learning how to use material ui, JavaScript, and python to design websites make really fun algorithms.
                    Check back later to see more up coming projects!
                  </Typography>
                  <h4 align="center">Purdue Run Club</h4>
                  <h4 align="center">Boiler Gold Rush</h4>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
