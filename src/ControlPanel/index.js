import React from 'react'
import { useSelector } from 'react-redux'

import RouterContainer from '../components/RouteContainer';

const ControlPanel = (props) => {

  const storeData = useSelector( (state) => {
    console.log("@useSelector [state]", state)
    return {
      loggedUser: state.loggedUser
    }
  } )

  return (
    <div className="control-panel-container">
      <RouterContainer userData={storeData.loggedUser.userData} routes={props.routes} />
    </div>
  )

}

export default ControlPanel