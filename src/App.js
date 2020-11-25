import React from 'react';
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
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Drawer
          variant="permanent"
          open={true}
          anchor="left">
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
        </Drawer>
        <Switch>
          <Route exact path="/" component={AboutUsScreen} ></Route>
          <Route path="/addresources" component={AddResourcesScreen}></Route>
          <Route path="/findresources" component={FindResourcesScreen}></Route>
          <Route path="/contributors" component={ContributorsScreen}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;