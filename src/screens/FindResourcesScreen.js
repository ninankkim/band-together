import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Map from '../components/Map';





const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));






export default function AddResourceScreen() {
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

            <Map />
            <div>

            </div>
            <img src="images/findshelter.png" width="1800px" border="5px solid black" alt="find shelter heading"></img>

            <img src="images/shelter.png" width="1800px" border="5px solid black" alt="find shelter heading"></img>

            <h1>Already Know the name of the Shelter?</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" variant="filled" placeholder="Alison's Digs" onChange={handleName} />
                <Fab variant="extended">
                    <AddIcon className={classes.extendedIcon} />
        Submit
        </Fab>
            </form>



            <h1>Let us know more about you so we can help you find the right shelter</h1>

            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Gender (can leave blank)</FormLabel>
                <RadioGroup aria-label="gender" name="gender" onChange={handleGender}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <p></p>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Bringing Your Child?</FormLabel>
                <RadioGroup aria-label="gender" name="child"  onChange={handleChild}>
                    <FormControlLabel value="yesChild" control={<Radio />} label="Yes" />
                    <FormControlLabel value="noChild" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <p></p>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">LGBTQ+ Friendly?</FormLabel>
                <RadioGroup aria-label="gender" name="lgbtq" onChange={handleIdent}>
                    <FormControlLabel value="LGBTQFriendly" control={<Radio />} label="Yes" />
                    <FormControlLabel value="notfriendly" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <p></p>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Pet Shelter Friendly?</FormLabel>
                <RadioGroup aria-label="gender" name="pet" onChange={handlePet}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>

            <Map />
        </div>




            <form>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Gender (can leave blank)</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Bringing Your Child?</FormLabel>
                    <RadioGroup aria-label="gender" name="child" onChange={handleChild}>
                        <FormControlLabel value="yesChild" control={<Radio />} label="Yes" />
                        <FormControlLabel value="noChild" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">LGBTQ+ Friendly?</FormLabel>
                    <RadioGroup aria-label="gender" name="lgbtq" onChange={handleIdent}>
                        <FormControlLabel value="LGBTQFriendly" control={<Radio />} label="Yes" />
                        <FormControlLabel value="notfriendly" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Pet Shelter Friendly?</FormLabel>
                    <RadioGroup aria-label="gender" name="pet" onChange={handlePet}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <Fab variant="extended">
                    <AddIcon className={classes.extendedIcon} />
        Submit
        </Fab>
            </form>
        <Map />





    )
}
