import React from 'react'
import NewDriverForm from './new_driver_form.component'

//Styles
import './new_driver.css'

const NewDriverPage = () =>{
    return (<div className="new-car-page">
        <p className="title">Add A New Driver</p>
       <p> Fill the form to add a new driver.</p>
        <NewDriverForm/>
    </div>)
}

export default NewDriverPage