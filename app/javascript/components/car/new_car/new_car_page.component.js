//Dependencies
import React from 'react'

//Components
import NewCarForm from './new_car_form.component'

//Styles
import './new_car.css'

const NewCarPage = () => {
    return (<div className="new-car-page">
        <p className="title">Add A New Car</p>
        <p>Fill the form to add a new car.</p>
        <NewCarForm />
    </div>)
}

export default NewCarPage