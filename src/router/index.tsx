import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// import routers from './routes';

const NestRouter = () => {
  return (
    <Suspense fallback={<>loading ...</>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default NestRouter;
