//Dependencies
import React, { useCallback, useEffect, useState } from 'react'

//Components
import Spinner from '../../spinner.component';
import SingleCarListItem from './single_car_list_item.component';
import ErrorComponent from '../../error.component';

//Services
import { getCars } from './../../../services/car.service';

//Styles
import './car_list.css';

const CarListPage = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getCarsData = useCallback(async () => {
        setLoading(true);
        let data = await getCars();
        if (data) {
            setCars(data);
        } else {
            setError(`Can't find any cars!`)
        }
        setLoading(false);
    }, [])

    useEffect(() => {
        getCarsData();
        return () => {
            setCars([]);
        }
    }, [getCarsData]);

    return (<>
        {loading ? <Spinner /> : error ? <ErrorComponent e={error} /> :
            cars.map(car => <SingleCarListItem key={car.id} {...car} />)
        }
    </>)
}

export default CarListPage;