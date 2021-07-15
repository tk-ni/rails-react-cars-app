//Dependencies
import React from 'react'

//Components
import { Link } from 'react-router-dom'

//Material UI
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';const BackHome = () => {
    return (<span className="backhome">
        <Link to="/" ><ArrowBackIosIcon/></Link>
    </span>)
}

export default BackHome