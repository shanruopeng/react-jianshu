import * as constants from './constants'
import axios from 'axios'

const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if (res.data.success) {
        const result = res.data.data
        const action = changeHomeData(result)
        dispatch(action)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}