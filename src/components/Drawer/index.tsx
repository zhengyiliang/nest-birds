import React, { useState } from 'react';
import { Drawer as AntdDrawer } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './index.less';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);

  const hide = () => setOpen(false);

  return (
    <div className="drawer-main">
      {!open && (
        <div className="drawer-switch" onClick={show}>
          <LeftOutlined />
        </div>
      )}
      <AntdDrawer
        rootClassName="drawer-content"
        title="分类导航"
        placement="right"
        closable={false}
        width={180}
        onClose={hide}
        open={open}
        zIndex={101}
        // getContainer={false}
      >
        <div className="drawer-btn">个人日记</div>
        <div className="drawer-btn">个人日记</div>
        <div className="drawer-btn">个人日记</div>
        <div className="drawer-btn">个人日记</div>
      </AntdDrawer>
    </div>
  );
};

export default Drawer;
