import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import talkpurduehome from "../images/talkpurduehome.png";
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
        <Grid>
          <Typography variant="h2" align="center" className={classes.pageTitle}>
            My Projects
          </Typography>
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
                    Talk Purdue
                  </Typography>
                  <CardMedia>
                    <img
                      src={talkpurduehome}
                      alt="talk purdue home"
                      width="475"
                      height="300"
                      className={classes.image}
                    />
                  </CardMedia>
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
