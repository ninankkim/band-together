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
    const [shelters, setShelters] = useState([])
    const [hoursAvailable, setHoursAvailable] = useState([])

    useEffect (() => {

        fetch('/api/v1/shelter')
                .then(res => res.json())
                .then(data => {
                    console.log("shelter data", data)
                    let newShelters = data
                    if (gender !== null) {
                        newShelters = data.filter(shelter => shelter.women_and_children === gender)
                        setShelters(newShelters);
                        console.log("filtered shelter data", newShelters);

                    }
                    if (hoursAvailable !== null) {
                        newShelters = data.filter(shelter => shelter.hoursAvailable === hoursAvailable)
                        setShelters(newShelters);
                        console.log("filtered shelter hours", newShelters);
                    }
                    
    
                })
    },[gender, hoursAvailable])


    const handleGender = (event) => {
        if (event.target.value === "true") {
            setGender(true)
        } else if (event.target.value === "false"){
            setGender(false)
        } else {
            setGender(null)
        }
    }

    const handleHoursAvailable = (event) => {
        if (event.target.value === "true") {
            setHoursAvailable(true)
        } else if (event.target.value === "false") {
            setHoursAvailable(false)
        } else {
            setHoursAvailable(null)
        }
    }
    
    return (
        <div>

            <img src="images/findshelterbw.png" border="5px solid black" alt="find shelter heading" className="responsive"></img>


            <h1>Please choose from the selections below.</h1>
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
                    <FormLabel component="legend">Show the hours?</FormLabel>
                    <RadioGroup aria-label="hoursAvailable" name="hoursAvailable" onChange={handleHoursAvailable} value={hoursAvailable}>
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                        <FormControlLabel value={null} control={<Radio />} label="not important" />
                    </RadioGroup>
                </FormControl>
                <p></p>
            </form>

            <Map
                gender={gender}
                shelters={shelters}
                hoursAvailable={hoursAvailable}
                name={name} />
        </div>
    )
}
