import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
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
        <BrowserRouter>
          <Route path='/' exact component = {Home}></Route>
          <Route path='/detail' exact component = {Detail}></Route>
        </BrowserRouter>
        </Provider>
      </div>
    )
   } 
};

export default App;
