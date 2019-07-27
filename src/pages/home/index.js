import React , { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import axios from 'axios'
import { connect } from 'react-redux'
class Home extends Component {
  render (){
    return (
      <HomeWrapper>
       <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic/>
          <List/>
       </HomeLeft>
       <HomeRight>
         <Recommend/>
         <Writer/>
       </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount () {
    axios.get('/api/home.json').then((res)=>{
      if(res.data.success) {
        const result = res.data.data
        const action = {
          type: 'change_home_data',
          topicList: result.topicList,
          articleList: result.articleList,
          recommendList: result.recommendList,
          writerList: result.writerList
        }
        this.props.changeHomeData(action)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData (action){
    dispatch(action)
  }
})

export default  connect (null, mapDispatch)(Home);