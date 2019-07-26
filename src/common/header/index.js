import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarpper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { actionCreators } from './store'

class Header extends Component {
  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className='right'>登录</NavItem>
          <SearchWarpper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe60c;
          </i>
            {this.getListArea()}
          </SearchWarpper>
        </Nav>
        <Addition>
          <Button className='writing'> <i className="iconfont">&#xe615;</i>写文章</Button>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea () {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map(item=>{
                return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.getIn(['header', 'focused'])
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);