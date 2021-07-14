import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';

const SingleDriverListItem = ({ id, attributes }) => {
    return (
        <Link to={`/driver/${id}`}>
            <Card className="single-driver-list-item">
                <p className="driver-name">
                    {attributes.name}
                    <span className="driver-id">
                        #{id}
                    </span>
                </p>
                <p className="driver-email">{attributes.email}</p>
            </Card>
        </Link>)
}

export default SingleDriverListItem;