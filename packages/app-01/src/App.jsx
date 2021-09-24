import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";

import { HashRouter as  Router } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        <SideNav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
