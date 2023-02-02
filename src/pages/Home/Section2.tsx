import React from 'react';
import { Row, Col, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';
import articalDefault from '@/assets/images/artical_default.jpg';
import './less/section2.less';

const list = [
  {
    url: articalDefault,
    title: '标题',
    date: '2017年2月16日',
    desc: '很想给你写封信,告诉你这里的天气. 昨夜的那场电影,还有我的心情.',
  },
  {
    url: articalDefault,
    title: '标题',
    date: '2017年2月16日',
    desc: '很想给你写封信,告诉你这里的天气. 昨夜的那场电影,还有我的心情.',
  },
  {
    url: articalDefault,
    title: '标题',
    date: '2017年2月16日',
    desc: '很想给你写封信,告诉你这里的天气. 昨夜的那场电影,还有我的心情.',
  },
];

const Section2 = () => {
  return (
    <div className="section section2" id="section2">
      <div className="fp-tablecell">
        <div className="page2">
          <div className="new-article">
            <ScrollAnimation className="inner" animateIn="animate__fadeInDown">
              <h1>热门文章</h1>
              <p>
                很想给你写封信,告诉你这里的天气.
                <br />
                昨夜的那场电影,还有我的心情.
              </p>
            </ScrollAnimation>
          </div>
          <Row>
            {list.map((item, index) => (
              <Col key={index} md={8} xs={24} style={{ padding: '0 10px' }}>
                <ScrollAnimation
                  // animateOnce
                  className="single-news"
                  delay={index * 200}
                  animateIn="animate__fadeInUp"
                >
                  <div className="news-head">
                    <img src={item.url} />
                    <span className="link">
                      <LinkOutlined style={{ fontSize: '1rem' }} />
                    </span>
                  </div>
                  <div className="news-content">
                    <h4>{item.title}</h4>
                    <div className="date">{item.date}</div>
                    <p>{item.desc}</p>
                    <Button type="link" style={{ paddingLeft: 0 }}>
                      阅读更多
                    </Button>
                  </div>
                </ScrollAnimation>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Section2;
