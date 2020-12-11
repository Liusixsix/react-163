import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {Spin} from 'antd'
import "./assets/style/index.scss"
import './assets/iconfont/iconfont.css'
import store from './store';
import routes from './router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Player from '@/pages/player/app-player-bar'
ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={Spin}>
           {renderRoutes(routes)}
        </Suspense>
         <Footer />
         <Player />
      </Router>
  </Provider>
    ,
  document.getElementById('root')
);

