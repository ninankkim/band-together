import React from 'react';
import './App.css';
import AboutUsScreen from './screens/AboutUsScreen';
import SeekDonationScreen from './screens/SeekDonationScreen';
import SeekHelpScreen from './screens/SeekHelpScreen';
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


function App() {
  return (

    <BrowserRouter>
      <div className="App">



        <Drawer
          variant="permanent"
          open={true}
          anchor="left">
          <List className="nav-bar">
            {['Home', 'Add Shelter', 'Find Shelter', 'Contributors'].map((text, index) => {
              if (text === 'Home') {
                return (
                  <Link to="/">
                    <ListItem button key={text}>
                      <ListItemIcon><InboxIcon /></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )
              } else if (text === 'Add Shelter') {
                return (
                  <Link to="/donation">
                  <ListItem button key={text}>
                    <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  </Link>
                )
              } else if (text === 'Find Shelter') {
                return (
                  <Link to="/help">
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
        </Drawer>
        <Switch>
          <Route exact path="/" component={AboutUsScreen} ></Route>
          <Route path="/donation" component={SeekDonationScreen}></Route>
          <Route path="/help" component={SeekHelpScreen}></Route>
          <Route path="/contributors" component={ContributorsScreen}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;