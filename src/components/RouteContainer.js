import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const RouterContainer = ({ routes, ...props }) => {

  return (

    <Switch>
      {
        routes.map( ({ path, ...route }, idx) => {
          if(!route.redirectTo)
            return (
              <Route
                key={idx}
                path={path}
              render={ () => {
                return (<route.component {...props} routes={(route.routes || [])} />)
              } } />
            )
          return (<Redirect key={idx} from={ path } to={ route.redirectTo } />)
        } )
      }
    </Switch>

  )

}

export default RouterContainer