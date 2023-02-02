import React from 'react';
import Menu from './Menu';
import Avatar from './Avatar';

import { HeaderProps } from '.';

const WIN = (props: HeaderProps) => {
  const { menus } = props;

  return (
    <div className="header-win">
      <span className="header_logo">Mr.Zyl</span>
      <div>
        <Menu items={menus} />
      </div>
      <span className="win-login">
        <Avatar />
      </span>
    </div>
  );
};

export default WIN;
