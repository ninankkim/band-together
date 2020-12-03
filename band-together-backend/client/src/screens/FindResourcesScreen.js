import React, { useEffect, useState } from 'react'
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
    const [gender, setGender] = useState(null)
    const [ident, setIdent] = useState('')
    const [shelters, setShelters] = useState([])
    useEffect (() => {

        fetch('/api/v1/shelter')
                .then(res => res.json())
                .then(data => {
                    console.log("shelter data", data)
                    let newShelters = data
                    if (gender !== null) {
                        newShelters = data.filter(shelter => shelter.women_and_children === gender)
                    }
                    if (ident !== null) {
                        newShelters = data.filter(shelter => shelter.lgbtFriendly === ident)
                    }
                    console.log("filtered shelter data", newShelters);
                    setShelters(newShelters);
    
                })
    },[gender, ident])


    const handleGender = (event) => {
        if (event.target.value === 'true') {
            setGender(true)
        } else if (event.target.value === 'false'){
            setGender(false)
        } else {
            setGender(null)
        }
    }

    const handleIdent = (event) => {
        if (event.target.value === 'true') {
            setIdent(true)
        } else if (event.target.value === 'false'){
            setIdent(false)
        } else {
            setIdent(null)
        }
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
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender} value={gender}>
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                        <FormControlLabel value={null} control={<Radio />} label="any" />

                    </RadioGroup>
                </FormControl>
                <p></p>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">LGBTQ+ Friendly?</FormLabel>
                    <RadioGroup aria-label="gender" name="lgbtq" onChange={handleIdent} value={ident}>
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                        <FormControlLabel value={null} control={<Radio />} label="any" />

                    </RadioGroup>
                </FormControl>
                <p></p>
            </form>

            <Map
                gender={gender}
                shelters={shelters}
                ident={ident}
                name={name} />
        </div>
    )
}
