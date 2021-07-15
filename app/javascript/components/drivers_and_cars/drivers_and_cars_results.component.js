//Dependencies
import React from "react"

//Components
import CarResultsDisplay from "./car_results_display.component"
import DriverResultsDisplay from "./driver_results_display.component"

const DriversAndCarsResults = (props) => {
    return (<div className="drivers-and-cars-results">
        {props.category == 'cars' ?
            <CarResultsDisplay car={props.results.car} drivers={props.results.drivers} />
            : props.category == 'drivers' ?
                <DriverResultsDisplay driver={props.results.driver} cars={props.results.cars} />
                : ''}
    </div>)
}

export default DriversAndCarsResults