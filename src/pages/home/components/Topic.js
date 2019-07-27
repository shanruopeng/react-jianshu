import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, TopPicImg } from '../style'
class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <TopicItem key={item.get('title')}>
                <TopPicImg /> 
                {item.get('title')}
              </TopicItem>
            )
          })
        }
       
      </TopicWrapper>
    )
  }
}
const mapState  = (state) => ({
  list: state.get('home').get('topicList')
})

const mapDispatch = (state) => ({

})

export default connect(mapState, mapDispatch)(Topic);