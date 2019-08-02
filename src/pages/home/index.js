import { connect } from 'react-redux'
import React , { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { actionCreators } from './store'
class Home extends Component {
  render (){
    return (
      <HomeWrapper>
       <HomeLeft>
          <img className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
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
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData (){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  }
})

export default  connect (null, mapDispatch)(Home);