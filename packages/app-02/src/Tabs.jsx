import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  makeStyles
} from "@material-ui/core";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch, 
  NavLink
} from "react-router-dom";

import React from "react";
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"

const Button = React.lazy(() => import("app_03/Button"));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TabsComponent() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { path: rootPath } = match;

  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={location.pathname} onChange={handleChange}>
          <Tab label="Configure" value={`${rootPath}/foo`} />
          <Tab label="Calibrate" value={`${rootPath}/bar`} />
          <Tab label="Test/Maint" value={`${rootPath}/about`} />
        </Tabs>
      </AppBar>

      <Switch>
        <Route path={rootPath} exact={true}>
          <Redirect to={`${rootPath}/foo`} />
        </Route>
        <Route path={`${rootPath}/foo`}>
          <Typography component="div">
            <Box p={3}>Configure Menu</Box>
          </Typography>
        </Route>
        <Route path={`${rootPath}/bar`}>
          <Typography component="div">
            <Box p={3}>
              Calibrate Menu
              <React.Suspense fallback={null}>
                <Button>Button From App 3</Button>
              </React.Suspense>
            </Box>
          </Typography>
        </Route>
        <Route path= {`${rootPath}/about`}>
          <About />
        </Route>
     
      </Switch>
    </div>
  );
}
