import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as AntdMenu, MenuProps as AntdMenuProps } from 'antd';

export interface MenuProps extends AntdMenuProps {}

const Menu = (props: MenuProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const { items, mode = 'horizontal' } = props;
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return <AntdMenu onClick={onClick} selectedKeys={[current]} mode={mode} items={items} />;
};

export default Menu;
