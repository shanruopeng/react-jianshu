import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, TopPicImg } from '../style'
class Topic extends PureComponent {
  render () {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item)=> (
              <TopicItem key={item.get('title')}>
                <TopPicImg /> 
                {item.get('title')}
              </TopicItem>
            )
          )
        }
      </TopicWrapper>
    )
  }
}
const mapState  = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

const mapDispatch = (state) => ({

})

export default connect(mapState, mapDispatch)(Topic);