//Dependencies
import React, { useState } from 'react'

//Components
import DriversAndCarsForm from './drivers_and_cars_form.component';

//Styles
import './drivers_and_cars.css';
import DriversAndCarsResults from './drivers_and_cars_results.component';

const DriversAndCars = () =>{
    const [resultData, setResultData] = useState(null);

    const handleGetResults = (category, results) =>{
        setResultData({results: results, category: category});
    }

    return (<div className="drivers-and-cars">
            <p className="title">Drivers And Cars</p>
            <DriversAndCarsForm handleGetResults={handleGetResults}/>
            {resultData ? <DriversAndCarsResults category={resultData.category} results={resultData.results}/> : ''}

        </div>)
}

export default DriversAndCars