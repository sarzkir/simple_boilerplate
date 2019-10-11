import React from 'react'
import RouterContainer from '../components/RouteContainer';

const Auth = (props) => {

  return (
    <div className="auth-container">
      <RouterContainer routes={props.routes} />
    </div>
  )

}

export default Auth