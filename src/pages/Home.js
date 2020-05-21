import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import portrait from "../images/portrait.jpg";
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
}));
export class Home extends Component {
  render() {
    const classes = useStyles;
    return (
      <div>
        <Grid className={classes.root}>
          <Grid item sm />
          <Grid item sm>
            <div className={classes.image}>
              <img
                src={portrait}
                alt="portrait"
                width="50"
                height="50"
                className={classes.image}
              />
            </div>
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
                  <h4 align="center">Twistter</h4>
                  <h4 align="center">Honestly</h4>
                </CardContent>
                <Link>
                  <Button
                    variant="contained"
                    tip="Projects"
                    component={Link}
                    to="/Projects"
                    textAlign="center"
                    color="default"
                  >
                    View More
                  </Button>
                </Link>
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
                  <h4 align="center">Boiler Gold Rush</h4>
                </CardContent>
                <Link>
                  <Button
                    variant="contained"
                    tip="About Me"
                    component={Link}
                    to="/About"
                    textAlign="center"
                    color="default"
                  >
                    Learn more
                  </Button>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
