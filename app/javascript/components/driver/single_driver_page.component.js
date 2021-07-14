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
import { getDriverById, getDriverCars } from './../../services/driver.service'

//Styles
import './single_driver_page.css'

const SingleDriverPage = (props) =>{
    const [driver, setDriver] = useState(null);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getDriverData = useCallback(async () => {
        setLoading(true);
        let data = await getDriverById(props.match.params.id);

        if (data) {
            setDriver(data);
        } else {
            setError(`Can't find car data!`)
        }
        setLoading(false);
    }, [])

    const getCarsData = useCallback(async () => {
        let data = await getDriverCars(props.match.params.id);
        if (data) {
            setCars(data);
        }
    }, [])

    
    useEffect(() => {
        getDriverData();
        getCarsData();
        return () => {
            setDriver(null);
            setCars([]);
        }
    }, [getDriverData]);

    return (<div className="single-driver-page">
    {loading ? <Spinner /> : error ? <ErrorComponent e={error} /> :
        <div className="single-driver-container">
            <p className="title">{driver?.attributes?.name}
                <span className="driver-id">
                    #{driver?.id}
                </span>
            </p>

            <p className="driver-email">
                Driver Email: {driver?.attributes?.email}
            </p>

            {cars.length > 0 ?
                <div className="cars">
                    <p className="title">Cars</p>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        ID
                                    </TableCell>
                                    <TableCell>
                                        Title
                                    </TableCell>
                                    <TableCell>
                                        Kind
                                    </TableCell>
                                    <TableCell>
                                        Color
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cars.map(car => {
                                    return <TableRow key={car.id}>
                                        <TableCell>
                                            {car.id}
                                        </TableCell>
                                        <TableCell>
                                            {car.title}
                                        </TableCell>
                                        <TableCell>
                                            {car.kind}
                                        </TableCell>
                                        <TableCell>
                                            {car.color}
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

export default SingleDriverPage