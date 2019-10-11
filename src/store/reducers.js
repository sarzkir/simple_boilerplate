import { combineReducers } from 'redux'

import storeLoggedUser from "./loggedUser"

const reducers = combineReducers({
  loggedUser: storeLoggedUser
})

export default reducers