/**
 * 程序的入口, 类似java中的main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './utils/index.js';  // 引入各种prototype辅助方法

// 开始引入各种自定义的组件
import Welcome from './components/Welcome';
import Error from './components/Error';
import Hello from './components/Hello';
import ProductSearch from './components/ProductSearch';

// Convert routes array to JSX-based routing
const routes = (
  <Provider>
    <Router>
      <Route path="/" component={Hello}>
        <IndexRoute component={Welcome} />
        <Route path="hello" component={Hello} />
        <Route path="productSearch" component={ProductSearch} />
        <Route path="*" component={Error} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
