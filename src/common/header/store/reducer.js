import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [] // 使用fromJS，数组也变成了immutable
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
       // immutable 对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}