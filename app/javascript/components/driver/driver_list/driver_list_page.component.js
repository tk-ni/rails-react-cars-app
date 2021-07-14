//Dependencies
import React, { useCallback, useEffect, useState } from 'react'

//Components
import Spinner from '../../spinner.component';
import SingleDriverListItem from './single_driver_list_item.component';
import ErrorComponent from '../../error.component';

//Services
import { getDrivers } from './../../../services/driver.service';

//Styles
import './driver_list.css'

const DriverListPage = () =>{
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getDriversData = useCallback(async () => {
        setLoading(true);
        let data = await getDrivers();
        if (data) {
            setDrivers(data);
        } else {
            setError(`Can't find any drivers!`)
        }
        setLoading(false);
    }, [])

    useEffect(() => {
        getDriversData();
        return () => {
            setDrivers([]);
        }
    }, [getDriversData]);

    return (<>
        {loading ? <Spinner /> : error ? <ErrorComponent e={error} /> :
            <>
                <p className="title">Drivers</p>
                {drivers.map(driver => <SingleDriverListItem key={driver.id} {...driver} />)}
            </>
        }
    </>)
}

export default DriverListPage