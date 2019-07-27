import styled from 'styled-components'
import topPicImg from '../../statics/topic-img.png'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height:270px;
  }
`

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  overflow: hidden;
`

export const TopicItem = styled.div`
  margin-left: 18px;
  margin-bottom: 10px;
  float:left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
`
export const TopPicImg = styled.span`
   display: block;
   float: left;
   width: 32px;
   height: 32px;
   background: url(${topPicImg});
   background-size: contain;
   margin-right: 10px;
`
