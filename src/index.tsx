import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import "./assets/style/index.scss"
import './assets/iconfont/iconfont.css'
import store from './store';
import routes from './router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Header />
         {renderRoutes(routes)}
         <Footer />
      </Router>
  </Provider>
    ,
  document.getElementById('root')
);

