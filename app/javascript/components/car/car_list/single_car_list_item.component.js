import React from 'react'
import { Link } from 'react-router-dom'

const SingleCarListItem = ({ attributes, id }) => {
    return (
        <Link to={`/car/${id}`}>
            <div className="single-car-list-item">
                {attributes.title}
                {attributes.kind}
                {attributes.color}
                {id}
            </div>
        </Link>)
}

export default SingleCarListItem;