import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
class App extends Component {
   render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalFontStyle/>
        <Provider store={store}>
        <Header/>
        </Provider>
      </div>
    )
   } 
};

export default App;
