//Dependencies
import React from 'react'

const ErrorComponent = ({e}) =>{
    if(!e){
        return (<div className="error">Oops! Something went wrong, please try again.</div>)
    }else{
        return (<div className="error">{e.toString()}</div>)
    }
}

export default ErrorComponent
