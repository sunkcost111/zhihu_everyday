import _ from '../../assets/utils'
let initial = {
  info: null,
}
//个人信息
export default function baseReducer(state = initial, action) {
  state = _.clone(state)
  switch (action.type) {
    default:
      break
  }
  return state
}
