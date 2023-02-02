import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom';
import './less/section1.less';

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <div className="section section1" id="section1">
      <div className="fp-tablecell">
        <div className="page1">
          <ScrollAnimation className="nav" animateIn="animate__zoomIn">
            <h1>正好有时间</h1>
            <p>剑气纵横三万里,一剑光寒十九洲</p>
            <Button
              onClick={() => navigate('/blog')}
              style={{ marginTop: 20 }}
              type="primary"
              size="large"
            >
              Enter Blog
            </Button>
          </ScrollAnimation>

          <div
            className="next"
            onClick={() => {
              const height = document.querySelector('#section1')?.clientHeight;
              if (height) {
                const target = document.documentElement;
                const scrollToTop = window.setInterval(() => {
                  if (target.scrollTop < (height as number)) {
                    target.scrollTop += (target.scrollTop + 30) / 30;
                  } else {
                    window.clearInterval(scrollToTop);
                  }
                }, 5);
              }
            }}
          >
            <DownOutlined style={{ fontSize: '2rem', color: '#fff' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
