//Dependencies
import React, { useCallback, useEffect, useState } from 'react'

//Components
import ErrorComponent from '../error.component';

//Material UI
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';

//Services
import { getCars, getCarAndDriversByTitle } from './../../services/car.service'
import { getDrivers, getDriverAndCarsByName } from './../../services/driver.service';

const DriversAndCarsForm = (props) => {
    const [carNames, setCarNames] = useState([]);
    const [driverNames, setDriverNames] = useState([]);
    const [chosenName, setChosenName] = useState('');
    const [category, setCategory] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const getCarNames = useCallback(async () => {
        let data = await getCars();
        if (data) {
            let names = [];
            for (let car of data) {
                if (car?.attributes?.title) {
                    names.push(car?.attributes?.title);
                }
            }
            setCarNames(names);
        } else {
            setError(`Can't find data`)
        }
    }, [])

    const getDriverNames = useCallback(async () => {
        let data = await getDrivers();
        if (data) {
            let names = [];
            for (let driver of data) {
                if (driver?.attributes?.name) {
                    names.push(driver?.attributes?.name);
                }
            }
            setDriverNames(names);
        } else {
            setError(`Can't find data`)
        }
    }, [])

    useEffect(() => {
        setDisabled(true);
        getCarNames();
        getDriverNames();
        setDisabled(false);
        return () => {
            setCarNames([]);
            setDriverNames([]);
        }
    }, [getCarNames, getDriverNames])

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setChosenName('');
    }

    const handleChosenNameChange = (e) => {
        setChosenName(e.target.value);
    }

    const handleSubmitClick = async () => {
        setDisabled(true);
        setError('');
        let valid = validateFromData();
        if (valid) {
            await processFormRequest();
        } else {
            setError("Invalid form data");
            setDisabled(false);
        }
    }

    const validateFromData = () => {
        if (!chosenName || !category) {
            return false;
        }

        if (category != 'cars' && category != 'drivers') {
            return false;
        }

        if (!carNames.includes(chosenName) && !driverNames.includes(chosenName)) {
            return false;
        }

        return true;
    }


    const processFormRequest = async () => {
        switch (category) {
            case 'cars':
                let data = await getCarAndDriversByTitle(chosenName);
                if (data) {
                    props.handleGetResults(category, data);
                } else {
                    setError('Something went wrong, please try again.');
                }
                setDisabled(false);
                break;
            case 'drivers':
                data = await getDriverAndCarsByName(chosenName);
                if (data) {
                    props.handleGetResults(category, data);
                } else {
                    setError('Something went wrong, please try again.')
                }
                setDisabled(false);
                break;
        }
    }

    return (<div className="drivers-and-cars-form">
        <form className="form-body">
            <div className="radio-container">
                <FormLabel component="legend">Choose a category to search in</FormLabel>
                <RadioGroup className="radio-group" value={category} onChange={handleCategoryChange}>
                    <FormControlLabel disabled={disabled} value="drivers" control={<Radio />} label="Drivers" />
                    <FormControlLabel disabled={disabled} value="cars" control={<Radio />} label="Cars" />
                </RadioGroup>
            </div>
            <FormControl className="name-dropdown" variant="filled" disabled={disabled}>
                <InputLabel>{category ? `Choose a name from ${category}` : 'Select a category'}</InputLabel>
                <Select
                    native
                    value={chosenName}
                    onChange={handleChosenNameChange}
                    disabled={disabled ? true : category ? false : true}
                >
                    <option aria-label="None" value="" />
                    {category == 'cars' ?
                        carNames.map(n => <option key={n} value={n}>{n}</option>) :
                        category == 'drivers' ?
                            driverNames.map(n => <option key={n} value={n}>{n}</option>) :
                            ''}

                </Select>
            </FormControl>

            <Button variant="contained" color="primary" disabled={disabled} onClick={handleSubmitClick}>
                Submit
            </Button>
        </form>
        {error ? <ErrorComponent e={error} /> : ''}
    </div>)
}

export default DriversAndCarsForm;