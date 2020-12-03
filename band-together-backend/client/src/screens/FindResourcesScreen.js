import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Map from '../components/Map'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function FindResourceScreen(props) {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [ident, setIdent] = useState('')
    const [shelters, setShelters] = useState('')


    const handleGender = (event, gender) => {
        setGender(event.target.value);
        console.log("its here hopefully", gender)
        fetch('/api/v1/shelter')
            .then(res => res.json())
            .then(data => {
                console.log("second pull", data)
                console.log("its here hopefully2", gender)

                if (gender === true) {
                    console.log("its true")
                    const filterData =
                        //if yes clicked then, do this
                        data.filter(shelter => shelter.women_and_children === true)
                    console.log("genderfilter", filterData)
                    setShelters(filterData);
                } else if
                    (gender === false) {
                    const menData =
                        data.filter(shelter => shelter.women_and_children === false)
                    console.log("men only!!!!!!!!!!", menData)
                    setShelters(menData);
                }
            })
    }

    const handleIdent = (event) => {

        setIdent(event.target.value);
    }
    const handleName = (event) => {

        setName(event.target.value);
    }
    return (
        <div>

            <img src="images/findshelterbw.png" border="5px solid black" alt="find shelter heading" className="responsive"></img>

            <h1>Looking for a specific shelter? Search the name. </h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" variant="filled" onChange={handleName} />

                <p></p>
                <Fab variant="extended">
                    <AddIcon className={classes.extendedIcon} />
                    Submit
                </Fab>
            </form>



            <h1>Please enter more information about the shelter below!</h1>
            <form>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Women and Children Only?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender}>
                        <FormControlLabel value="true" control={<Radio />} label="true" />
                        <FormControlLabel value="false" control={<Radio />} label="false" />
                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">LGBTQ+ Friendly?</FormLabel>
                    <RadioGroup aria-label="gender" name="lgbtq" onChange={handleIdent}>
                        <FormControlLabel value="true" control={<Radio />} label="true" />
                        <FormControlLabel value="false" control={<Radio />} label="false" />
                    </RadioGroup>
                </FormControl>
                <p></p>
            </form>

            <Map
                gender={gender}
                ident={ident}
                name={name} />
        </div>
    )
}
