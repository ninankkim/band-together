import React, { useState } from 'react';
import clsx from 'clsx';
import './index.css';
import AboutUsScreen from './screens/AboutUsScreen';
import AddResourcesScreen from './screens/AddResourcesScreen';
import FindResourcesScreen from './screens/FindResourcesScreen';
import ContributorsScreen from './screens/ContributorsScreen';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
  },
});

            
  function App() {

  const classes = useStyles();
  const [sidebar, setSideBar] = useState ({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSideBar({ ...sidebar, [anchor]: open });
  };
  const list = (anchor) => (
  <div className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List className="nav-bar">
            {['Home', 'Add Resources', 'Find Resources', 'Contributors'].map((text, index) => {
              if (text === 'Home') {
                return (
                  <Link to="/">
                    <ListItem button key={text}>
                      <ListItemIcon><InboxIcon /></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )
              } else if (text === 'Add Resources') {
                return (
                  <Link to="/addresources">
                  <ListItem button key={text}>
                    <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  </Link>
                )
              } else if (text === 'Find Resources') {
                return (
                  <Link to="/findresources">
                  <ListItem button key={text}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  </Link>
                )
              } else {
                return (
                  <Link to="/contributors">
                    <ListItem button key={text}>
                      <ListItemIcon><PeopleIcon /></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )
              }
            })}
          </List>
  </div>
);

  return (

    <BrowserRouter >
      <div className="App">
      {['left'].map((anchor) => (

        <>
        
      <Button onClick={toggleDrawer(anchor, true)}><NavigateNextIcon /></Button>
        <Drawer
          variant="temporary"
          anchor={anchor} open={sidebar[anchor]} onClose={toggleDrawer(anchor, false)}
          >
          {list(anchor)}
        </Drawer>
        <Switch>
          <Route exact path="/" component={AboutUsScreen} ></Route>
          <Route path="/addresources" component={AddResourcesScreen}></Route>
          <Route path="/findresources" component={FindResourcesScreen}></Route>
          <Route path="/contributors" component={ContributorsScreen}></Route>
        </Switch>
        </>
        ))}
        <footer className="row center"></footer>
      </div>
    </BrowserRouter>
  );
}
export default App;