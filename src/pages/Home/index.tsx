import React from 'react';
import { Menu } from '@/components';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './index.less';

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
