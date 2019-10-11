import loggedUserTypes from "./action-types"

const loggedUserCreator = {

  login: (token, userData) => {
    return {
      type: loggedUserTypes.LOGIN,
      token,
      payload: userData
    }
  },
  updateToken: (token) => {
    return {
      type: loggedUserTypes.UPDATE_TOKEN,
      payload: token
    }
  },
  updateLoggedDetail: (payload) => {
    return {
      type: loggedUserTypes.UPDATE_LOGGED_DETAIL,
      payload
    }
  },
  logout: () => {
    return {
      type: loggedUserTypes.LOGOUT
    }
  }

}

export default loggedUserCreator