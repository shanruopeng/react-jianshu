import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarpper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem} from './style'
import { actionCreators } from './store'
const getListArea = (show) =>{
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
     return null
  }
}
const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
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
         { getListArea (props.focused) }
        </SearchWarpper>
      </Nav>
      <Addition>
        <Button className='writing'> <i className="iconfont">&#xe615;</i>写文章</Button>
        <Button className="register">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    // focused: state.getIn(['header', 'focused'])
    focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);