//Dependencies
import React, { useState } from 'react'

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Components
import ErrorComponent from '../../error.component';

//Services
import { addDriver } from './../../../services/driver.service';

const NewDriverForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmitClick = async () => {
        setDisabled(true);
        let valid = validateFormData();
        if (valid) {
            let success = await addDriver({ name, email });
            if (success) {
                setName('');
                setEmail('');
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
        if (!name || !email) {
            return false;
        }

        if(!validateEmail(email)){
            return false;
        }

        return true;
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (<div className="new-driver-form">
        <form className={disabled ? "form-body disabled" : "form-body"}>
            <TextField disabled={disabled} label="Name" variant="filled" value={name} onChange={handleNameChange} />
            <TextField disabled={disabled} label="Email" variant="filled" value={email} onChange={handleEmailChange} />

            <Button variant="contained" color="primary" disabled={disabled} onClick={handleSubmitClick}>
                Submit
            </Button>
        </form>
        {error ? <ErrorComponent e={error} /> : ''}
        {success ? <div className="success">Successfuly added a new driver!</div> : ''}
    </div>)
}

export default NewDriverForm