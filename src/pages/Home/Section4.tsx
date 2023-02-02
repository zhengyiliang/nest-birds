import React from 'react';
import { Row, Col, Button } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  FileTextOutlined,
  ShareAltOutlined,
  FileZipOutlined,
  CommentOutlined,
  FlagOutlined,
  EnvironmentFilled,
  QqOutlined,
  MailFilled,
} from '@ant-design/icons';
import { CopyRight } from '@/components';
import { useNavigate } from 'react-router-dom';
import './less/section4.less';

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <ScrollAnimation className="footer" animateIn="animate__fadeInUp">
      <div className="footer-top">
        <div className="container">
          <Row>
            <Col xs={24} sm={12} md={8}>
              <div className="single-widget ">
                <div className="footer-logo">
                  <h2>正好有时间</h2>
                </div>
                <p>剑气纵横三万里，一剑光寒十九洲。</p>
                <Button onClick={() => navigate('/blog')} type="primary" className="mt20">
                  About Me
                </Button>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div className="single-widget">
                <h2>相关链接</h2>
                <ul className="social-icon">
                  <li>
                    <span>
                      <FileTextOutlined className="mr10" />
                      博文
                    </span>
                  </li>
                  <li>
                    <span>
                      <CommentOutlined className="mr10" />
                      留言
                    </span>
                  </li>
                  <li>
                    <span>
                      <ShareAltOutlined className="mr10" />
                      资源
                    </span>
                  </li>
                  <li>
                    <span>
                      <FlagOutlined className="mr10" />
                      日记
                    </span>
                  </li>
                  <li>
                    <span>
                      <FileZipOutlined className="mr10" />
                      归档
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <div className="single-widget contact">
                <h2>联系我</h2>
                <ul className="list">
                  <li>
                    <EnvironmentFilled className="mr10" />
                    地址: 中国大陆
                  </li>
                  <li>
                    <QqOutlined className="mr10" />
                    QQ: 1107361070
                  </li>
                  <li>
                    <MailFilled className="mr10" />
                    邮箱: 930054439@qq.com
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <CopyRight />
    </ScrollAnimation>
  );
};

export default Section4;
