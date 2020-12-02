import React from 'react';
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
        <div>
            <div className={classes.root}>
    <Button variant="outlined" component={Link} to="/addshelter">Add Shelter</Button>
    <Button variant="outlined" component={Link} to="/addfood">Add Food</Button>
    <Button variant="outlined" component={Link} to="/adddonation">Add Donation</Button>

            </div>
        <Switch>
        <Route path="/addshelter" component={AddShelter}></Route>
        <Route path="/addfood" component={AddFood}></Route>
        <Route path="/adddonation" component={AddDonation}></Route>
        </Switch>
        </div>
    )
}

