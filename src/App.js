import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'
class App extends Component {
   render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalFontStyle/>
        <Header/>
      </div>
    )
   } 
};

export default App;
