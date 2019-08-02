import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Detail extends PureComponent {
  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML = {{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getDetail()
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)