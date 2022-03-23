import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Protected({component:Component, ...rest}) {
    const navigate= useNavigate();
  
    return (
    <Route
    {...rest}
    render={props=>{
        if(auth.getInstance().getCurrentUser())
        {
            return <Component {...props} />;
        }
        
    }}
    />
  )
}
