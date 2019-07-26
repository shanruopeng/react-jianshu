import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = ()=> ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data) // 将普通数组变成immutable数组
})

export const getList = () => {
  return (dispath) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      if(data.success){
        dispath(changeList(data.data))
      }
    }).catch(() => {
      console.log('error')
    })
  }
}
