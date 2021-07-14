//Dependencies
import React, { useState } from 'react'

//Material UI
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

//Components
import ErrorComponent from '../../error.component';

//Services
import {addCar} from './../../../services/car.service';

const NewCarForm = () => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [kind, setKind] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleKindChange = (e) => {
        setKind(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleSubmitClick = async () => {
        setDisabled(true);
        let valid = validateFormData();
        if (valid) {
            let success = await addCar({title, kind,color});
            if(success){
                setTitle('');
                setColor('');
                setKind('');
                setError('');
                setSuccess(true);
                setDisabled(false);
            }
        } else {
            setError("Invalid form data");
            setDisabled(false);
        }
    }

    const validateFormData = () => {
        if(!title || !color || !kind){
            return false;
        }
        if (color != 'blue' && color != 'yellow' && color != 'red') {
            return false;
        }
        if (kind != 'wagon' && kind != 'sport' && kind != 'truck') {
            return false;
        }
        return true;

    }

    return (<div className="new-car-form">
        <form className={disabled ? "form-body disabled" : "form-body"}>
            <TextField disabled={disabled} label="Title" variant="filled" value={title} onChange={handleTitleChange} />
            <FormControl variant="filled" disabled={disabled}>
                <InputLabel>Kind</InputLabel>
                <Select
                    native
                    value={kind}
                    onChange={handleKindChange}
                >
                    <option aria-label="None" value="" />
                    <option value={'wagon'}>Wagon</option>
                    <option value={'sport'}>Sport</option>
                    <option value={'truck'}>Truck</option>
                </Select>
            </FormControl>
            <FormControl variant="filled" disabled={disabled}>
                <InputLabel>Color</InputLabel>
                <Select
                    native
                    value={color}
                    onChange={handleColorChange}
                >
                    <option aria-label="None" value="" />
                    <option value={'blue'}>Blue</option>
                    <option value={'yellow'}>Yellow</option>
                    <option value={'red'}>Red</option>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" disabled={disabled} onClick={handleSubmitClick}>
                Submit
            </Button>
        </form>
        {error ? <ErrorComponent e={error} /> : ''}
        {success ? <div className="success">Successfuly added a new car!</div> : ''}
    </div>)
}

export default NewCarForm