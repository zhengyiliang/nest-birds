import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from '@/App';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // 样式重置
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'animate.css';
import '@/assets/styles/index.less';
import App from './App';
// import Layout from './layout';
// console.log(renderRoutes(routes));
const root = document.getElementById('root');

// var test = null;

if (root) {
  createRoot(root).render(
    <ConfigProvider
      prefixCls="next-birds"
      theme={{
        components: {
          Button: {
            colorPrimary: '#1e9fff',
            colorPrimaryHover: '#2d92dd',
            colorPrimaryActive: '#1e9fff',
          },
          // Menu: {
          //   colorPrimary: '#6bc30d',
          // },
        },
        token: {
          colorPrimary: '#6bc30d',
        },
      }}
    >
      <App />
    </ConfigProvider>
  );
}
