import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends Component {
  render () {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt="120" />
                <ListInfo>
                  <h3 className='title'>{item.get('title')} </h3>
                  <p className='desc'>{item.get('desc')} </p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    // list: state.get('home').get('articleList')
    list: state.getIn(['home', 'articleList'])
  }
}

const mapDispatch = () => {
  return {}
}

export default connect(mapState, mapDispatch)(List);