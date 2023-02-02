import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './less/section3.less';

const Section3 = () => {
  return (
    <>
      <div className="section section3">
        <div className="page3">
          <ul className="links">
            <ScrollAnimation style={{ display: 'inline-block' }} animateIn="animate__fadeInLeft">
              <li>
                <span>关于</span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation style={{ display: 'inline-block' }} animateIn="animate__fadeInRight">
              <li>
                <span>+友情链接</span>
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </div>
      <div className="section" style={{ backgroundColor: '#FAF9F9' }}>
        <div className="page3">
          <div style={{ textAlign: 'center' }}>
            <ScrollAnimation className="mb20" animateIn="animate__fadeInLeft">
              <h1>次元使者</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight">
              爱好游戏，动漫。闲来无事喜欢在一些不健康的场所虚度光阴，撸起代码就会废寝忘食。
            </ScrollAnimation>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
