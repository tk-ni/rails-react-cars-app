import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home.component';
const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />

            {/* Handle 404's */}
            <Route render={() => <Home />} />
        </Switch>
    )
}

export default App