import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import talkpurduehome from "../images/talkpurduehome.png";
import talkpurduedialog from "../images/talkpurduedialog.png";
import talkpurduelogin from "../images/talkpurduelogin.png";
import talkpurdueprofile from "../images/talkpurdueprofile.png";

import honestlylanding from "../images/honestlylanding.png";
import honestlycontribution from "../images/honestlycontribution.png";
import honestlyresults from "../images/honestlyresults.png";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  cardControl: {
    padding: theme.spacing(5),
    marginBottom: "20px",
    alignItems: "center",
    justify: "center",
  },
  cardRoot: {
    minWidth: 100,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 14,
  },
  image: {
    width: 700,
    height: 700,
    objectFit: "cover",
    maxWidth: "100%",
    borderRadius: "50%",
    align: "center",
  },
}));
const classes = useStyles;
export class Projects extends Component {
  render() {
    return (
      <div>
        <Grid spacing={10}>
          <Typography variant="h2" align="center" className={classes.pageTitle}>
            My Projects
          </Typography>
          <Grid className={classes.cardRoot} marginBottom={20}>
            <Grid
              container
              spacing={3}
              className={classes.cardControl}
              justify="center"
            >
              <Grid item xs={9}>
                <Card className={classes.cardRoot}>
                  <Typography
                    container
                    variant="h5"
                    align="center"
                    gutterBottom
                  >
                    Talk Purdue
                  </Typography>
                  <CardMedia align="center" marginBottom="60px">
                    <img
                      src={talkpurduehome}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                    <img
                      src={talkpurduedialog}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                    <img
                      src={talkpurduelogin}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                    <img
                      src={talkpurdueprofile}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                  </CardMedia>
                  <Grid
                    container
                    align="center"
                    padding="25px"
                    objectFit="cover"
                  >
                    <Typography variant="body1" align="center" gutterBottom>
                      This is talk purdue, a social media website that I made
                      based off of twitter. For the backend we used JavaScript
                      and Express, while on the front end we used Material-UI
                      and redux. This was a very fun project and I followed a
                      short tutorial on firebase and various sources to really
                      learn how to make the project. More updates to come soon!
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.cardRoot}>
            <Grid
              container
              spacing={3}
              className={classes.cardControl}
              justify="center"
            >
              <Grid item xs={9}>
                <Card className={classes.cardRoot}>
                  <Typography
                    container
                    variant="h5"
                    align="center"
                    gutterBottom
                  >
                    Honestly
                  </Typography>
                  <CardMedia align="center" marginBottom="60px">
                    <img
                      src={honestlylanding}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                    <img
                      src={honestlycontribution}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                    <img
                      src={honestlyresults}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                  </CardMedia>
                  <Grid
                    container
                    align="center"
                    padding="25px"
                    objectFit="cover"
                  >
                    <Typography variant="body1" align="center" gutterBottom>
                     Honestly is a project about making a word cloud using python and google search. 
                     We first load the first 10 websites and then scrape through the websites to find the
                     most relevant words that is related to the searched word. Afterwards we then align it into the various
                     positions to form a word cloud. Feel free to take a look at it.
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;
/** add this in when buttons work
 * <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                      marginBottom="20"
                    >
                      <a href="http://www.talkpurdue.com" target="_blank">
                        <Button
                          variant="contained"
                          color="#FFFFF"
                          component={Link}
                          label="Website"
                        >
                          Website
                        </Button>
                      </a>
                    </Grid>
 */
