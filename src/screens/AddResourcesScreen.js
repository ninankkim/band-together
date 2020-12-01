import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'


export default function AddResourceScreen() {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value);
    }



    return (
        <div>
            <img src="images/addshelterbwd.png"  border="5px solid black" alt="find shelter heading" className="responsive"></img>
            <h1>This is your add screen, ya dummy</h1>
            </div>


    )
}
