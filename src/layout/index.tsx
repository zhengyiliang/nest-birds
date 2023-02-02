import React, { createContext, useEffect, useState } from 'react';
import { Layout as AntdLayout } from 'antd';
import { enquireScreen } from 'enquire-js';
import { CopyRight, Header } from '@/components';
import { Outlet } from 'react-router-dom';
import type { LayoutProps } from '@/constants/interface';

import './index.less';

let mobile;
enquireScreen((b) => {
  console.log(b);
  mobile = b;
});

// const { location } = window;

export const LayoutContext = createContext<LayoutProps>({
  isMobile: false,
});

const { Header: AntdHeader, Content, Footer } = AntdLayout;

const Layout = () => {
  const [isMobile, setIsMobile] = useState(mobile);
  // const [show, setShow] = useState(!location.port);
  // console.log(show, isMobile);
  useEffect(() => {
    // 适配手机屏幕;
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     setShow(true);
    //   }, 500);
    // }
  }, []);

  return (
    <AntdLayout>
      <AntdHeader>
        <Header isMobile={isMobile} />
      </AntdHeader>
      <Content /* style={{ ...(isMobile ? { paddingTop: '5%', paddingBottom: '5%' } : {}) }} */>
        <LayoutContext.Provider value={{ isMobile }}>
          <Outlet />
        </LayoutContext.Provider>
      </Content>
      <Footer>
        <CopyRight isMobile={isMobile} />
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
