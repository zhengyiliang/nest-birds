import React from 'react';
import { Row, Col, Button } from 'antd';
import iconUrl from '@/assets/images/beiang.png';
import { LayoutProps } from '@/constants/interface';
import './index.less';

export interface CopyrightProps extends LayoutProps {}

const CopyRight = (props: CopyrightProps) => {
  const { isMobile } = props;

  return (
    <div className="copyright">
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={24} className="text-center">
            Copyright © 2021 zhengyiliang.cn All Rights Reserved. {isMobile ? <br /> : ''}备案号：
            <a target="_blank" rel="noreferrer" href="http://beian.miit.gov.cn/">
              京ICP备2021015150号-1
            </a>
            <br />
            <Button
              type="link"
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802035053"
            >
              <img src={iconUrl} />
              &nbsp;&nbsp;
              <span>京公网安备 11010802035053号</span>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CopyRight;
