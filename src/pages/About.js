import React, { Component, Fragment } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import theme from "../components/theme";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import runclub from "../images/runclub.JPG";

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
      <Grid className={classes.root}>
        <Typography variant="h2" className={classes.pageTitle} align="center">
          About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card className={classes.cardRoot}>
              <Typography variant="h4" className={classes.paper} align="center">
                Quick Facts
              </Typography>
              <List className={classes.root}>
                <Typography
                  variant="h5"
                  className={classes.paper}
                  align="center"
                  marginBottom
                >
                  Relevant Coursework
                </Typography>
                <ListItem>
                  <ListItemText
                    primary="- Object Oriented Programming, Foundations of Computer Science, Systems Programming, Software Engineering I,
                  Software Testing, Operating Systems"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Calculus, Multivariate Calculus, Physics, Software Tools" />
                </ListItem>
                <Typography
                  variant="h5"
                  className={classes.paper}
                  align="center"
                  marginBottom
                >
                  Technologies and Languages
                </Typography>
                <ListItem>
                  <ListItemText primary="- Java, C, C++, JavaScript, HTML/CSS, Assembly, python" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Intellij, CLion, Qt, Visual Studio Code, Git, Terminal, Vim, Firebase, Heroku, MongoDB" />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card className={classes.cardRoot}>
              <Typography variant="h4" className={classes.paper} align="center">
                Experience
              </Typography>
              <Typography
                variant="h5"
                className={classes.paper}
                align="center"
                marginBottom="10px"
              >
                Underwriters Laboratory - Wireless Product Testing Intern
              </Typography>
              <List className={classes.root}>
                <ListItem>
                  <ListItemText primary="- Tested various wireless product to make sure they were safe for consumers" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Used various substances to test the frequency of the products" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Measured data and recorded its value for reports" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="- Worked with various wireless technologies such as LTE, GSM, and CDMA" />
                </ListItem>
              </List>
              <Typography
                variant="h5"
                className={classes.paper}
                align="center"
                marginBottom="10px"
              >
                Projects
              </Typography>
              <Grid align="center" marginBottom="20px">
                <Button
                  variant="contained"
                  component={Link}
                  color="#FFFFF"
                  objectFit="cover"
                  align="center"
                  to="/Projects"
                >
                  See it here
                </Button>
              </Grid>
              <Typography
                variant="h5"
                className={classes.paper}
                align="center"
                marginBottom="10px"
              >
                Fun Activities
              </Typography>
              <Typography
                variant="h6"
                className={classes.paper}
                align="center"
                marginBottom="10px"
              >
                Running
              </Typography>
              <Typography
                variant="body"
                className={classes.paper}
                align="center"
                marginBottom="10px"
              >
                I really enjoy running. I picked up the sport in 2014 and fell
                in love with it ever since. I first ran for my high school, the
                Gunn Cross Country Team before moving on and running with Purdue
                Run Club!
              </Typography>
              <Grid align="center" marginBottom>
                <img src={runclub} width="500" height="300" alt="run club" />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default About;
