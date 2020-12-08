import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Map from '../components/Map';
import './screensstyle.css';

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
    const [foodPantries, setFoodPantries] = useState([]);
    const [affiliated, setAffiliated] = useState(null)


    useEffect(() => {

        fetch('/api/v1/shelter')
            .then(res => res.json())
            .then(data => {
                console.log("shelter data", data)
                let newShelters = data
                if (gender !== null) {
                    newShelters = data.filter(shelter => shelter.women_and_children === gender)
                    setShelters(newShelters);
                    console.log("filtered shelter data", newShelters);

                } else {
                    setShelters(data)
                }


            })
    }, [gender])


    const handleGender = (event) => {
        if (event.target.value === "true") {
            setGender(true)
        } else if (event.target.value === "false") {
            setGender(false)
        } else {
            setGender(null)
        }
    }


    useEffect(() => {
        fetch('/api/v1/foodpantry')
            .then(res => res.json())
            .then(data => {
                console.log("food pantry data", data)
                let newPantries = data
                if (affiliated !== null) {
                    newPantries = data.filter(pantry => pantry.church_affiliated === affiliated)
                    setFoodPantries(newPantries);
                    console.log("filtered food pantrydata", newPantries);
                }  else {
                    setFoodPantries(data)
                }             


                
            })
    }, [affiliated])

    const handlePantries = (event) => {
        if (event.target.value === "true") {
            setAffiliated(true)
        } else if (event.target.value === "false") {
            setAffiliated(false)
        } else {
            setAffiliated(null)
        }
    }
        
    


    return (
        <div>

            <img src="images/resources.1.png" border="5px solid black" alt="find shelter heading" className="responsive"></img>


            <h1>Please choose from the selections below</h1>
            <form>
            <h3>Shelter:</h3>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Women and Children Only?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" onChange={handleGender} value={gender}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                        <FormControlLabel value={null} control={<Radio />} label="No Preference" />

                    </RadioGroup>
                </FormControl>
                <p></p>

                
                    <h3>Food Pantry:</h3>
                <FormControl className="formfield" component="fieldset">
                    <FormLabel component="legend">Type of Affiliation?</FormLabel>
                    <RadioGroup aria-label="affiliated" name="affiliated" onChange={handlePantries} value={affiliated}>
                        <FormControlLabel value={true} control={<Radio />} label="Religious Affiliation" />
                        <FormControlLabel value={false} control={<Radio />} label="Non-Religious Affiliation" />
                        <FormControlLabel value={null} control={<Radio />} label="No Preference" />

                    </RadioGroup>
                </FormControl>
                <p></p>
                
            </form>
            

            <Map
                gender={gender}
                shelters={shelters}
                hoursAvailable={hoursAvailable}
                name={name}
                foodPantries={foodPantries}
                />
        </div>
    )
}
