import React, { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './AddShelter.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AddShelter() {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [child, setChild] = useState('')
    const [ident, setIdent] = useState('')

    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleChild = (event) => {
        setChild(event.target.value);
    }
    const handleIdent = (event) => {
        setIdent(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <img src="images/addshelterbwd.png"  border="5px solid black" alt="find shelter heading" className="responsive"></img>
            <h3>What's The Shelter Called?</h3>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" variant="filled" placeholder="Sheltering Arms" onChange={handleName} /></form>
            <h3>What's The Phone Number for the Shelter?</h3>
            <form className={classes.root} noValidate autoComplete='off'> 
            <TextField id="filled-basic" variant="filled" placeholder="1-800-234-5678" onChange={handleName} /></form>
            <h3>What's The Address for the Shelter?</h3>
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id="filled-basic" variant="filled" placeholder="789 Rainbow Drive" onChange={handleName} />
            </form>

            <h1>Let us know more about the shelter you would like to add!</h1>
            <form>
            <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Which genders does this shelter accept?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <p></p>
            <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Does the shelter allow children?</FormLabel>
                    <RadioGroup aria-label="gender" name="child" onChange={handleChild}>
                        <FormControlLabel value="yesChild" control={<Radio />} label="Yes" />
                        <FormControlLabel value="noChild" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Is it LGBTQ+ Friendly?</FormLabel>
                    <RadioGroup aria-label="gender" name="lgbtq" onChange={handleIdent}>
                        <FormControlLabel value="LGBTQFriendly" control={<Radio />} label="Yes" />
                        <FormControlLabel value="notfriendly" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <p></p>
                <Fab variant="extended">
                    <AddIcon className={classes.extendedIcon} />
                    Submit
                </Fab>
            </form>
        </div>
    )
}
