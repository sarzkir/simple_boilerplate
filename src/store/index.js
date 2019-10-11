import { createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const store = createStore(reducers, composeWithDevTools())

export default store