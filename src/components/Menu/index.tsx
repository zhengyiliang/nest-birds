import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { MenuProps as AntdMenuProps } from 'antd';
import cs from 'classnames';
import menus from '@/constants/menus';
import './index.less';

export interface MenuProps {
  defaultVisible?: boolean;
  visible?: boolean;
  maskClosable?: boolean;
  // eslint-disable-next-line
  onVisibleChange?: (visible: boolean) => void;
  className?: string;
}

const Menu = (props: MenuProps) => {
  const {
    defaultVisible = false,
    className,
    visible,
    onVisibleChange,
    maskClosable = true,
  } = props;

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(defaultVisible);

  const showMenu = visible ?? isActive;
  const handleClick = (e) => {
    if (e.target.id === 'navgation_shade' && maskClosable) {
      setIsActive(false);
      onVisibleChange && onVisibleChange(false);
    }
  };

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!showMenu);
          onVisibleChange && onVisibleChange(!showMenu);
        }}
        className={cs('hover_animation', { menu_open: !showMenu, menu_close: showMenu })}
      >
        <em></em>
        <em></em>
        <em></em>
      </div>
      <div
        onClick={handleClick}
        id="navgation_shade"
        className={cs(
          'navgation',
          { navgation_open: showMenu, navgation_close: !showMenu },
          className
        )}
      >
        <div className="navgation_drawer"></div>
        <ul className="navgation_item">
          {menus?.map((item: any) => (
            <li key={item?.key} onClick={() => navigate(`${item?.key}`)}>
              <NavLink
                to={`${item?.key}`}
                className={cs({ 'navgation-active': item?.key === '/home' })}
              >
                {item?.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navgation_logo">Mr.Zyl</div>
      </div>
    </>
  );
};

export default Menu;
