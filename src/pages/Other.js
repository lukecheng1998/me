import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import theme from "../components/theme";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
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
export class Other extends Component {
  render() {
    const classes = makeStyles();
    return (
      <Grid>
        <Typography variant="h2" className={classes.pageTitle} align="center">
          Other
        </Typography>
        <Typography variant="h3" className={classes.pageTitle} align="center">
          Boiler Gold Rush
        </Typography>
        <Typography variant="body1" className={classes.cardRoot} align="center">
          Coming Soon
        </Typography>
      </Grid>
    );
  }
}

export default Other;
