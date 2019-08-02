import React, { PureComponent } from 'react';
import { GlobalStyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'
import { Provider } from 'react-redux'
class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalFontStyle />
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
