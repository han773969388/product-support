/**
 * 程序的入口, 类似java中的main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {hashHistory, IndexRoute, Route, Router} from 'react-router';
import './utils/index.js'; // 引入各种prototype辅助方法
import store from 'redux/store.js'; // redux store
// 开始引入各种自定义的组件
import App from './components/App';
import Welcome from './components/Welcome';
import Error from './components/Error';

const DBTableContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/DBTable').default)
  }, 'DBTable');
};

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="productSupport" tableName="ps" getComponent={DBTableContainer} />
        <Route path="*" component={Error} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
