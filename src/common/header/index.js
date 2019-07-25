import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarpper}from './style'
class Header extends Component {
  render () {
    return (
        <HeaderWrapper> 
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
            </NavItem>
            <NavItem className= 'right'>登录</NavItem>
            <SearchWarpper>
            <CSSTransition
              in = {this.props.focused}
              timeout= {200}
              classNames = "slide"
            > 
            <NavSearch 
              className = {this.props.focused ? 'focused' : ''} 
              onFocus = {this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            >
            </NavSearch>
            </CSSTransition>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
            </SearchWarpper>
          </Nav>
          <Addition>
            <Button className='writing'> <i className="iconfont">&#xe615;</i>写文章</Button>
            <Button className="register">注册</Button>
          </Addition>
        </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);