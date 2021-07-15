//Dependencies
import React from 'react'

//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    return (<div className="spinner">
        <CircularProgress
            variant="determinate"
            size={40}
            thickness={4}
            value={80}
        />
    </div>)
}

export default Spinner