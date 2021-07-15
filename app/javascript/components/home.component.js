//Dependencies
import React from 'react';

//Components
import {Link} from 'react-router-dom'

const Home = () =>{
    return(<div className="home">
        <p className="title">Where do you want to go?</p>
        <ul className="main-menu">
            <Link to="/car/list"><li>Cars</li></Link>
            <Link to="/car/new"><li>New Car</li></Link>
            <Link to="/driver/list"><li>Drivers</li></Link>
            <Link to="/driver/new"><li>New Driver</li></Link>
            <Link to="/driversandcars"><li>Drivers And Cars</li></Link>
        </ul>
    </div>)
}

export default Home
