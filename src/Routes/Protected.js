import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isloggedIn,children}) => {
 
      if(!isloggedIn)
      return <Navigate to="/home" replace/>
      return children;
      
  
}

export default Protected
