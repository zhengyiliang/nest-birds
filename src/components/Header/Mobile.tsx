import React, { useState } from 'react';
import cs from 'classnames';
import Avatar from './Avatar';
import { HeaderProps } from '.';
import Menu from './Menu';

const Mobile = (props: HeaderProps) => {
  const { menus } = props;

  const [isActive, setIsActive] = useState(false);

  // const open = () => setIsActive(true);

  const close = () => setIsActive(false);

  const classNames = cs('mobile_menu-modal', {
    'mobile_menu-modal-close': !isActive,
    'mobile_menu-modal-open': isActive,
  });

  const handleClick = (e) => {
    if (e.target.className === 'mobile_menu-shade') {
      close();
    }
  };

  return (
    <>
      <div className="header-mobile">
        <span className="mobile-login" onClick={() => close()}>
          <Avatar />
        </span>
        <span className="header_logo">Mr.Zyl</span>
        <div
          onClick={() => setIsActive(!isActive)}
          className={cs('mobile-menu', {
            'mobile-menu_close': !isActive,
            'mobile-menu_open': isActive,
          })}
        >
          <em />
          <em />
          <em />
        </div>
      </div>
      <div className={classNames}>
        <div onClick={handleClick} className="mobile_menu-shade">
          <Menu items={menus} mode="vertical" />
        </div>
      </div>
    </>
  );
};

export default Mobile;
