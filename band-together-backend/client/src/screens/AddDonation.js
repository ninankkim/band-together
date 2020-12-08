import React, { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './AddDonations.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AddDonation() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [child, setChild] = useState('')
    const [ident, setIdent] = useState('')
    const [pet, setPet] = useState('')

    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleChild = (event) => {
        setChild(event.target.value);
    }
    const handleIdent = (event) => {
        setIdent(event.target.value);
    }
    const handlePet = (event) => {
        setPet(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <img src="images/donate.png"  border="5px solid black" alt="find shelter heading" className="responsive"></img>
            <h3>What's The Donation Center Called?</h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" variant="filled" placeholder="BestWill" onChange={handleName} />
            </form>
            <h3>What's The Phone Number for the Donation Center?</h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" variant="filled" placeholder="1-800-234-5678" onChange={handleName} />
            </form>
            <h3>What's The Address for the Donation Center?</h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" variant="filled" placeholder="789 Rainbow Drive" onChange={handleName} />
            </form>

            <h1>Let us know more about the donation center you would like to add!</h1>
            <form>
            <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Which gender does this shelter accept?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender}>
                        <FormControlLabel value="Clothes" control={<Checkbox />} label="Clothes" />
                        <FormControlLabel value="Furniture" control={<Checkbox />} label="Furniture" />
                        <FormControlLabel value="Shoes" control={<Checkbox />} label="Shoes" />
                        <FormControlLabel value="Kitchen Supplies" control={<Checkbox />} label="Kitchen Supplies" />
                        <FormControlLabel value="All" control={<Checkbox />} label="All" />
                    </RadioGroup>
                </FormControl>
                <p></p>

                <p></p>
                <Fab variant="extended">
                    <AddIcon className={classes.extendedIcon} />
                    Submit
                </Fab>
            </form>
        </div>
    )
}
