import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`;

export const SearchWarpper = styled.div`
  float: left;
  position: relative;
  
  .zoom {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  background: #eee;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition  = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius : 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &.register{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`

export const SearchInfo = styled.div`
  width: 240px;
  position: absolute;
  left: 0;
  top: 56px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-szie: 13px;
  cursor: pointer;
  .spin{
    font-size: 13px;
    margin-right: 2px;
    transition: all .2s ease-in;
    display: block;
    float: left;
    transform-origin: center center;
  }
`

export const SearchInfoList  = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 2px 6px;
  border: 1px solid #b4b4b4;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover{
    color: #333;
  }
`