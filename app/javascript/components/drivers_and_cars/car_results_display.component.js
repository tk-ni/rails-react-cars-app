import React from 'react'

// Material UI
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const CarResultsDisplay = ({ car, drivers }) => {
    return (
        <div className="results">
            <p className="title">{car.title}
                <span className="car-id">#{car.id}</span>
            </p>

            <p className="car-kind">
                Car Kind: {car.kind}
            </p>
            <p className="car-color">
                Car Color: {car.color}
            </p>
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
                                Created At
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drivers.length > 0 ? drivers.map(driver => {
                            return <TableRow key={driver.id}>
                                <TableCell>
                                    {driver.id}
                                </TableCell>
                                <TableCell>
                                    {driver.name}
                                </TableCell>
                                <TableCell>
                                    {driver.created_at}
                                </TableCell>
                            </TableRow>
                        }) : <TableRow>
                            <TableCell>
                                No drivers found.
                            </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
}

export default CarResultsDisplay