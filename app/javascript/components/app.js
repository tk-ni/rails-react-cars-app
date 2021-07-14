// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Home from './home.component'
import CarListPage from './car/car_list/car_list_page.component'
import NewCarPage from './car/new_car/new_car_page.component'
import DriverListPage from './driver/driver_list/driver_list_page.component'
import NewDriverPage from './driver/new_driver/new_driver_page.component'
import DriversAndCarsPage from './drivers_and_cars/drivers_and_cars_page.component'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/car/list" render={() => <CarListPage />} />
            <Route exact path="/car/new" render={() => <NewCarPage />} />
            <Route exact path="/driver/list" render={() => <DriverListPage />} />
            <Route exact path="/driver/new" render={() => <NewDriverPage />} />
            <Route exact path="/driversandcars" render={() => <DriversAndCarsPage />} />
            {/* Handle 404's */}
            <Route render={() => <Home />} />
        </Switch>
    )
}

export default App