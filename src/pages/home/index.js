import React , { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
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
}

export default Home;