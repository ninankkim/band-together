import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'


export default function FindResourceScreen() {
    const [value, changeValue] = useState('')

    const handleChange = () => {
        //logic for another time
    }
    return (
        <div>
            <img src="images/shelter.png" width="1800px" border="5px solid black" alt="find shelter heading"></img>
            <h1>Let us know more about you so we can help you find the right shelter.</h1>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Transgender" control={<Radio />} label="Transgender" />
                </RadioGroup>
            </FormControl>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Bringing Your Child?</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="yesChild" control={<Radio />} label="Yes" />
                    <FormControlLabel value="noChild" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Question 3</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Answer1" control={<Radio />} label="Answer1" />
                    <FormControlLabel value="Answer2" control={<Radio />} label="Answer2" />
                </RadioGroup>
            </FormControl>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Question 4</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="AnswerA" control={<Radio />} label="AnswerA" />
                    <FormControlLabel value="AnswerB" control={<Radio />} label="AnswerB" />
                </RadioGroup>
            </FormControl>
            <FormControl className="formfield" component="fieldset">
                <FormLabel component="legend">Bringing a Pet?</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <h2>Find Your Shelter</h2>
            <h5>map api rendering here....</h5>
            <button>Find Shelter</button>
            </div>


    )
}
