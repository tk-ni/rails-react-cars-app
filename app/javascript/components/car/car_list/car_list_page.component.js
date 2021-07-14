import React, { useCallback, useEffect, useState } from 'react'
import { getCars } from './../../../services/car.service';
import SingleCarListItem from './single_car_list_item.component';

const CarListPage = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCarData = useCallback(async () => {
        setLoading(true);
        let data = await getCars();
        console.log(data);
        setCars(data);
        setLoading(false);
    }, [])

    useEffect(() => {
        getCarData();
    }, [getCarData]);

    return (<>
    {loading ? 'Loading...' : cars.map(car => <SingleCarListItem {...car}/>)}
    </>)
}

export default CarListPage;