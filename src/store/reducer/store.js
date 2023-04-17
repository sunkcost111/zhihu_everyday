import * as TYPES from '../axtion-types'
import _ from '../../assets/utils'
let initial = {
  list: null,
}
export default function storeReducer(state=initial,action) {
  state = _.clone(state)
  switch (action.type) {
    default:
      break;
  }
  return state
}
