import React from 'react'

// Material UI
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const DriverResultsDisplay = ({ driver, cars }) => {
    return (
        <div className="results">
            <p className="title">{driver.name}
                <span className="car-id">#{driver.id}</span>
            </p>

            <p className="driver-email">
                Driver Email: {driver.email}
            </p>

            <p className="title">Cars</p>
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
                        {cars.length > 0 ? cars.map(car => {
                            return <TableRow key={car.id}>
                                <TableCell>
                                    {car.id}
                                </TableCell>
                                <TableCell>
                                    {car.title}
                                </TableCell>
                                <TableCell>
                                    {car.created_at}
                                </TableCell>
                            </TableRow>
                        }) : <TableRow>
                            <TableCell>
                                No cars found.
                            </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
}

export default DriverResultsDisplay