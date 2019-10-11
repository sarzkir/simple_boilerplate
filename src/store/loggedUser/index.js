import loggedUserTypes from "./action-types"

export const initialLoggedUserState = {
  userData: [],
  token: "",
  isAuthenticated: false,
  isSuperAdmin: false
}

const storeLoggedUser = (state = initialLoggedUserState, action) => {

  switch(action.type){
    case loggedUserTypes.LOGIN: {
      return {
        ...state,
        userData: action.userData,
        token: action.token,
        isAuthenticated: true
      }
    }
    case loggedUserTypes.UPDATE_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    case loggedUserTypes.UPDATE_LOGGED_DETAIL: {
      return {
        ...state,
        ...action.payload
      }
    }
    case loggedUserTypes.LOGOUT: {
      return initialLoggedUserState
    }
    default:
      return state
  }

}

export default storeLoggedUser