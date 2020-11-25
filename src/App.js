import React from 'react';
import './index.css';
import AboutUsScreen from './screens/AboutUsScreen';
import { BrowserRouter, Route} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleIcon from '@material-ui/icons/People';
import SeekHelpScreen from './screens/SeekHelpScreen';




function App() {
  return (
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

export default App;