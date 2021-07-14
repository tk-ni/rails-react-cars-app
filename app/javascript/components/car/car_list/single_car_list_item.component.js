import React from 'react';

const SingleCarListItem = ({ attributes, id }) => {
    return (<div>
        {attributes.title}
        {attributes.kind}
        {attributes.color}
        {id}
    </div>)
}

export default SingleCarListItem;