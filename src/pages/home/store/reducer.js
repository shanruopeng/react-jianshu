import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topList: fromJS(action.topList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    default:
      return state
  }
}