import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';

const SingleCarListItem = ({ attributes, id }) => {
    return (
        <Link to={`/car/${id}`}>
            <Card className="single-car-list-item">
                <p className="car-title">
                    {attributes.title}
                    <span className="car-id">
                        #{id}
                    </span>
                </p>
                <p className="car-kind">
                    Car Kind: {attributes.kind}
                </p>
                <p className="car-color">
                    Car Color: {attributes.color}
                </p>

            </Card>
        </Link>)
}

export default SingleCarListItem;