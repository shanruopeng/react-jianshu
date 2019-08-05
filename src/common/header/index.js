import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWarpper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
class Header extends PureComponent {
  render () {
    const { focused, list, login, handleInputFocus, handleInputBlur, handleLogout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
        <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {
            login ? <NavItem className='right' onClick={handleLogout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <SearchWarpper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60c;
           </i>
            {this.getListArea()}
          </SearchWarpper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writing'> <i className="iconfont">&#xe615;</i>写文章</Button>
          </Link>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea () {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i className='spin iconfont' ref = { (icon)=>{ this.spinIcon = icon }}>
               &#xe606;
              </i>
              换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
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
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList()) // 避免每次都请求数据
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if(spin.style.transform) {
        originAngle = parseInt(originAngle)
      } else {
        originAngle = 0 
      }
      spin.style.transform = 'rotate(' + (originAngle + 360 ) + 'deg)'
     
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    handleLogout(){
      dispatch(loginActionCreators.logout()) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);