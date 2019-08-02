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
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo  = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`
export const WriterWrapper = styled.div`
  width: 278px;
`

export const WriterTitle = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;
  margin: 0 0 20px;
`

export const WriterItem = styled.div`
  margin-top: 15px;
  overflow: hidden;
  .pic {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .nickname {
    padding: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  .total {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin: 30px 0;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`