//Dependencies
import React from 'react'

//Components
import NewDriverForm from './new_driver_form.component'
import BackHome from '../../backhome.component'

//Styles
import './new_driver.css'

const NewDriverPage = () => {
    return (<div className="new-car-page">
        <p className="title"><BackHome /> Add A New Driver</p>
        <p>Fill the form to add a new driver.</p>
        <NewDriverForm />
    </div>)
}

export default NewDriverPage