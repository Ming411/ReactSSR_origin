import React from 'react';
// import Home from '../share/pages/Home';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import routes from '../share/routes';
import {renderRoutes} from 'react-router-config';
// 用于生成返回给客户端的html结构
export default req => {
  // const content = renderToString(<Home />);
  // 此处实现的是服务端路由
  const content = renderToString(
    // 设置路由相关,自动匹配路由对应组件
    <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
  );
  return `
  <html>
     <head>
      <title>React SSR</title>
    </head>
   <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
   </body>
  </html>
  `;
};
