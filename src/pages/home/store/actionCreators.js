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

const addHomeList = (list, nextPage) => {
  return {
    type: constants.ADD_AIRTICLE_LIST,
    list: list,
    nextPage
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

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      if (res.data.success) {
        const result = res.data.data
        const action = addHomeList(result, page + 1)
        dispatch(action)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})