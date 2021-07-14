import React from 'react'

const SingleCarPage = (props) =>{
    return (<div>{props.match.params.id}</div>)
}

export default SingleCarPage