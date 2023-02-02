import { LayoutProps } from '@/constants/interface';
import { MenuProps } from 'antd';
import React from 'react';
import WIN from './Win';
import './index.less';
import Mobile from './Mobile';
import menus from '@/constants/menus';

export interface HeaderProps {
  menus: MenuProps['items'];
}

export interface TopMenuProps extends LayoutProps {}

const Header = (props: TopMenuProps) => {
  const { isMobile } = props;

  return <>{isMobile ? <Mobile menus={menus} /> : <WIN menus={menus} />}</>;
};

export default Header;
