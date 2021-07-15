//Dependencies
import React, { useState } from 'react'

//Components
import ErrorComponent from '../error.component';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const DriversAndCarsForm = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmitClick = () => {
        setDisabled(true);
        let valid = validateFromData();
        if (valid) {
            //Process form request
        } else {
            setError("Invalid form data");
            setDisabled(false);
        }
    }

    const validateFromData = () => {
        if (!search || !category) {
            return false;
        }

        if (category != 'cars' && category != 'drivers') {
            return false;
        }

        return true;
    }


    const processFormRequest = () => {
        switch (category) {
            case 'cars':
                break;
            case 'drivers':
                break;
        }
    }
    return (<div className="drivers-and-cars-form">
        <form className="form-body">
            <TextField className="text-field" disabled={disabled} label="Search for a driver or a car by name" variant="filled" value={search} onChange={handleSearchChange} />
            <div className="radio-container">
                <FormLabel component="legend">Choose a category to search in</FormLabel>
                <RadioGroup className="radio-group" value={category} onChange={handleCategoryChange}>
                    <FormControlLabel value="drivers" control={<Radio />} label="Drivers" />
                    <FormControlLabel value="cars" control={<Radio />} label="Cars" />
                </RadioGroup>
            </div>
            <Button variant="contained" color="primary" disabled={disabled} onClick={handleSubmitClick}>
                Submit
            </Button>
        </form>

    </div>)
}

export default DriversAndCarsForm;