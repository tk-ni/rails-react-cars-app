//Dependencies
import React, { useState } from 'react'

//Components
import DriversAndCarsForm from './drivers_and_cars_form.component';

//Styles
import './drivers_and_cars.css';
import DriversAndCarsResults from './drivers_and_cars_results.component';

const DriversAndCars = () =>{
    const [cars, setCars] = useState([]);
    const [drivers, setDrivers] = useState([]);

    const handleGetResults = ({cars, drivers}) =>{
        console.log(cars, drivers);
    }

    return (<div className="drivers-and-cars">
            <p className="title">Drivers And Cars</p>
            <DriversAndCarsForm handleGetResults={handleGetResults}/>
            {cars.length > 0 ? <DriversAndCarsResults cars={cars}/> : ''}
            {drivers.length > 0 ? <DriversAndCarsResults drivers={drivers}/> : ''}

        </div>)
}

export default DriversAndCars