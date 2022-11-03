import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '../share/routes';
import Home from '../share/pages/Home';
// hydrate 会复用DOM节点,对组件进行二次渲染，添加交互事件
ReactDOM.hydrate(
  // <Home /> 之前的单页面
  //  客户端路由配置
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root')
);
