//Dependencies
import React, { useState, useCallback, useEffect } from 'react'

//Components
import Spinner from '../spinner.component'
import ErrorComponent from '../error.component'

// Material UI
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

//Services
import { getCarById, getCarDrivers } from './../../services/car.service'

//Styles
import './single_car_page.css'

const SingleCarPage = (props) => {
    const [car, setCar] = useState(null);
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getCarData = useCallback(async () => {
        setLoading(true);
        let data = await getCarById(props.match.params.id);

        if (data) {
            setCar(data);
        } else {
            setError(`Can't find car data!`)
        }
        setLoading(false);
    }, [])

    const getDriversData = useCallback(async () => {
        let data = await getCarDrivers(props.match.params.id);
        if (data) {
            setDrivers(data);
        }
    }, [])

    useEffect(() => {
        getCarData();
        getDriversData();
        return () => {
            setCar(null);
            setDrivers([]);
        }
    }, [getCarData]);

    return (<div className="single-car-page">
        {loading ? <Spinner /> : error ? <ErrorComponent e={error} /> :
            <div className="single-car-container">
                <p className="title">{car?.attributes?.title}
                    <span className="car-id">
                        #{car?.id}
                    </span>
                </p>

                <p className="car-kind">
                    Car Kind: {car?.attributes?.kind}
                </p>
                <p className="car-color">
                    Car Color: {car?.attributes?.color}
                </p>

                {drivers.length > 0 ?
                    <div className="drivers">
                        <p className="title">Drivers</p>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            ID
                                        </TableCell>
                                        <TableCell>
                                            Name
                                        </TableCell>
                                        <TableCell>
                                            Email
                                        </TableCell>
                                        <TableCell>
                                            Created At
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {drivers.map(driver =>{
                                        return <TableRow key={driver.id}>
                                            <TableCell>
                                                {driver.id}
                                            </TableCell>
                                            <TableCell>
                                                {driver.name}
                                            </TableCell>
                                            <TableCell>
                                                {driver.email}
                                            </TableCell>
                                            <TableCell>
                                                {driver.created_at}
                                            </TableCell>
                                        </TableRow>
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div> : ''}
            </div>}
    </div>)
}

export default SingleCarPage