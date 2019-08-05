import axios from 'axios'
import * as constants from './constants'
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})
export const login = (account, password) =>{
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then( res => {
      if(res.data.success) {
        const result = res.data.data
        if (result) {
          dispatch(changeLogin())
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})