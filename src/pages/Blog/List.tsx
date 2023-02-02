import React, { useEffect, useState } from 'react';
import { Button, Divider, List, Skeleton } from 'antd';
import ListItem from './ListItem';
import InfiniteScroll from 'react-infinite-scroll-component';

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface BlogListProps {
  trigger?: string;
}

const BlogList = (props: BlogListProps) => {
  const { trigger = 'scroll' } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  // 初始化时只加载一次
  const [initLoading, setinitLoadint] = useState(true);

  const loadMoreData = (type?: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (type === 'init') {
      setinitLoadint(true);
    }
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
        if (type === 'init') {
          setinitLoadint(false);
        }
      })
      .catch(() => {
        setLoading(false);
        if (type === 'init') {
          setinitLoadint(false);
        }
      });
  };

  useEffect(() => {
    loadMoreData('init');
    // eslint-disable-next-line
  }, []);

  const Loader = (
    <Skeleton
      style={{ padding: '20px 30px', backgroundColor: '#fff' }}
      avatar
      paragraph={{ rows: 3 }}
      active
    />
  );

  const EndMessage = <Divider plain>It is all, nothing more 🤐</Divider>;

  let children: React.ReactNode = null;

  const hasMore = data.length < 20;

  console.log(trigger);

  if (trigger === 'scroll') {
    children = (
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={Loader}
        endMessage={EndMessage}
        scrollableTarget="html"
      >
        <List
          loading={initLoading}
          className="article-list"
          dataSource={data}
          renderItem={ListItem}
        />
      </InfiniteScroll>
    );
  }

  if (trigger === 'click') {
    children = (
      <List
        loading={initLoading}
        loadMore={(() => {
          // 没有更多了
          if (!hasMore) {
            return EndMessage;
          }
          // 不满足条件-加载更多
          if (!loading && !initLoading) {
            return (
              <Divider plain>
                <Button
                  type="link"
                  style={{ color: '#6bc30d', fontWeight: 600 }}
                  onClick={() => loadMoreData()}
                >
                  点击加载更多
                </Button>
              </Divider>
            );
          }
          // 加载中
          if (loading) {
            return Loader;
          }
          return <></>;
        })()}
        className="article-list"
        dataSource={data}
        renderItem={ListItem}
      />
    );
  }

  return <>{children}</>;
};

export default BlogList;
