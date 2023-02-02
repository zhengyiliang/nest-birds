import React from 'react';
import NestRouter from './router';
import { FloatButton } from 'antd';

function App() {
  return (
    <>
      <NestRouter />
      <FloatButton.BackTop />
    </>
  );
}
export default App;
