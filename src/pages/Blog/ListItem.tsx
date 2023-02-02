import React from 'react';
import { SnippetsFilled, EyeFilled, MessageFilled } from '@ant-design/icons';
import { Col, Divider, Row, List } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import articalUrl from '@/assets/images/artical_default.jpg';

export default function ListItem(item) {
  return (
    <>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
        <List.Item key={item.email}>
          <div className="fc-flag">置顶</div>
          <h5 className="title">
            <span className="fc-blue">【原创】</span>
            <span>.NET Spire.Doc组件</span>
          </h5>
          <div className="time">
            <span className="day">21</span>
            <span className="month fs-18">
              1<span className="fs-14">月</span>
            </span>
            <span className="year fs-18 ml10">2019</span>
          </div>
          <Row className="content">
            <Col
              style={{ backgroundImage: `url(${articalUrl})` }}
              className="img-light"
              md={8}
              xs={24}
            >
              {/* <img src={articalUrl} /> */}
            </Col>
            <Col md={16} xs={24} className="content-text">
              Spire.Doc for .NET是一款由E-iceblue公司开发的专业的Word
              .NET类库，使用该工具开发人员可以在任意.NET平台（C#，VB.NET，ASP.NET）上快速创建，读取，写入，转换，打印Word文档。作为一个独立的Word
              组件，Spire.Doc的运行无需安装Microsoft Word。而且，它可以将Microsoft
              Word文档创建功能集成到开发者的任何.NET应用程序。
            </Col>
          </Row>
          <Divider
            style={{ marginTop: 0, marginBottom: 10 }}
            orientation="left"
            orientationMargin={0}
          >
            <span className="linkHover" style={{ fontWeight: 600 }}>
              继续阅读
            </span>
          </Divider>
          <Row className="item-footer" justify={'space-between'}>
            <Col>
              <span className="item-label">
                <SnippetsFilled style={{ fontSize: 16 }} />
                <span className="tag">ASP.NET.MVC</span>
              </span>
            </Col>
            <Col style={{ textAlign: 'right', display: 'flex', alignItems: 'center' }}>
              <EyeFilled style={{ fontSize: 20 }} />
              &nbsp; 123
              <MessageFilled style={{ fontSize: 16, marginLeft: 20 }} />
              &nbsp; 123
            </Col>
          </Row>
        </List.Item>
      </ScrollAnimation>
    </>
  );
}
