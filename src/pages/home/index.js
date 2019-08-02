import { connect } from 'react-redux'
import React , { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight , BackTop} from './style'
import { actionCreators } from './store'
class Home extends PureComponent {

  handleScrollTop (){
    window.scrollTo(0,0)
  }
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
       {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
       }
      
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeSrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeSrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData (){
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeSrollTopShow(){
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);