import React, { Component, Fragment } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import theme from "../components/theme"
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
export class About extends Component {
    
    render() {
        const classes = useStyles;
        return (
            <Grid>
                <Typography
                variant="h2"
                className={classes.pageTitle}
                align="center">About Me</Typography>
            </Grid>
        )
    }
}

export default About
