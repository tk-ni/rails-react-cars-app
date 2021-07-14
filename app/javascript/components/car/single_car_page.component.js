//Dependencies
import React, { useState, useCallback, useEffect } from 'react'

//Components
import Spinner from '../spinner.component'
import ErrorComponent from '../error.component'

//Services
import { getCarById } from './../../services/car.service'

const SingleCarPage = (props) => {
    const [car, setCar] = useState(null);
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

    useEffect(() => {
        getCarData();
        return () => {
            setCar([]);
        }
    }, [getCarData]);
    return (<div className="single-car-page">
        {loading ? <Spinner /> : error ? <ErrorComponent e={error} /> : car?.attributes?.title}
    </div>)
}

export default SingleCarPage