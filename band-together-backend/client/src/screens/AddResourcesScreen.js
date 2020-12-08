import React from 'react';
import './AddResources.css'
import AddShelter from './AddShelter';
import AddFood from './AddFood';
import AddDonation from './AddDonation';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
    },
    },
}));

export default function AddResourcesScreen() {
    const classes = useStyles();
    return (
        <>
        <img src="images/addres.png" border="5px solid black" className="responsive"></img>
        <div>
            <div id='container' className={classes.root}>
    <Button className='choose' variant="outlined" component={Link} to="/addshelter">Add Shelter</Button>
    <Button className = 'chose' variant="outlined" component={Link} to="/addfood">Add Food Pantry</Button>
    <Button className = 'choose' variant="outlined" component={Link} to="/adddonation">Add Donation Center</Button>

            </div>
        <Switch>
        <Route path="/addshelter" component={AddShelter}></Route>
        <Route path="/addfood" component={AddFood}></Route>
        <Route path="/adddonation" component={AddDonation}></Route>
        </Switch>
        </div>
        </>
    )
}

