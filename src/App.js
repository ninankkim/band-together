import React from 'react';
import './index.css';
import AboutUsScreen from './screens/AboutUsScreen';
<<<<<<< HEAD
import { BrowserRouter, Route} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
=======
import SeekDonationScreen from './screens/SeekDonationScreen';
import SeekHelpScreen from './screens/SeekHelpScreen';
import ContributorsScreen from './screens/ContributorsScreen';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';

>>>>>>> fec6a9d22b1a579d40ff7301854116701cc47086
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleIcon from '@material-ui/icons/People';
<<<<<<< HEAD
import SeekHelpScreen from './screens/SeekHelpScreen';


=======
>>>>>>> fec6a9d22b1a579d40ff7301854116701cc47086


function App() {
  return (
<<<<<<< HEAD
          <BrowserRouter>
        <div className="App">
        <Drawer
            // container={container}
            variant="permanent"
            open={true}
            // onClose={handleDrawerToggle}
            anchor="left"

            
          >
            <div>
      <div />
      <Divider />
      <List>
        {['Home'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Add Shelter'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><HomeWorkIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Find Shelter'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Contributors'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
          </Drawer>
          <Route exact path="/" component={AboutUsScreen} ></Route>
          <Route path="/shelter" component={SeekHelpScreen}></Route>
        </div>
        </BrowserRouter>    
      );
  }
=======

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
>>>>>>> fec6a9d22b1a579d40ff7301854116701cc47086

export default App;