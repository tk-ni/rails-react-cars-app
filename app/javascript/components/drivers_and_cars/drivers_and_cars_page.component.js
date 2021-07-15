//Dependencies
import React, { useState } from 'react'

//Components
import DriversAndCarsForm from './drivers_and_cars_form.component';

//Styles
import './drivers_and_cars.css';
import DriversAndCarsResults from './drivers_and_cars_results.component';

const DriversAndCars = () =>{
    const [category, setCategory] = useState('');
    const [results, setResults] = useState(null);

    const handleGetResults = (category, results) =>{
        setCategory(category);
        setResults(results);
    }

    return (<div className="drivers-and-cars">
            <p className="title">Drivers And Cars</p>
            <DriversAndCarsForm handleGetResults={handleGetResults}/>
            {category && results ? <DriversAndCarsResults category={category} results={results}/> : ''}

        </div>)
}

export default DriversAndCars