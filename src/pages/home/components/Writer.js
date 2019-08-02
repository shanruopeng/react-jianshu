import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterTitle, WriterItem } from '../style'
class Writer extends PureComponent {
  render () {
    const { list } = this.props
    return (
     <WriterWrapper>
        <WriterTitle>推荐作者</WriterTitle>
        {
          list.map((item) =>{
            return (
              <WriterItem key={item.get('id')}>
                <img className='pic' src={item.get('avatar_source')} alt='' />
                <p className='follow'>+ 关注</p>
                <p className = 'nickname'>{item.get('nickname')}</p>
                <p className='total'>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')} 喜欢</p>
               
              </WriterItem>
            )
          })
        }  
     </WriterWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapState, null)(Writer);