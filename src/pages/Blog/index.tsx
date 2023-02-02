import React, { useContext } from 'react';
import List from './List';
import { LayoutContext } from '@/layout';
import './index.less';
// import { LayoutProps } from '@/constants/interface';
import { ArticalCategory, ArticalTop, Drawer, Visitor } from '@/components';

const Blog = () => {
  // console.log(props);
  // const { isMobile } = props;
  const { isMobile } = useContext(LayoutContext);
  return (
    <div className="blog">
      <div className="left">
        <List trigger={isMobile ? 'click' : 'scroll'} />
        {isMobile && (
          <>
            <ArticalTop title="热门文章" />
            <ArticalTop title="置顶推荐" />
            <Visitor />
          </>
        )}
      </div>
      {isMobile ? (
        <Drawer />
      ) : (
        <div className="right" id="blog_right">
          <ArticalCategory />
          <ArticalTop title="热门文章" />
          <ArticalTop title="置顶推荐" />
          <Visitor />
        </div>
      )}
    </div>
  );
};

export default Blog;
