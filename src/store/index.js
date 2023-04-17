import { applyMiddleware, createStore } from "redux"
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducer from './reducer/index'
let middleWare = [reduxThunk,reduxPromise]
let env = process.env.NODE_ENV
if(env === 'development'){
  middleWare.push(reduxLogger)
}
const store = createStore(reducer,applyMiddleware(...middleWare))

export default store;