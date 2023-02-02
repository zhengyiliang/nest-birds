import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import cs from 'classnames';
import './index.less';

const list = [
  {
    name: '全部文章',
  },
  {
    name: '个人日记',
  },
  {
    name: 'HTML5&amp;CSS3',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'ASP.NET MVC',
  },
  {
    name: '其它',
  },
];

const ArticalCategory = () => {
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState<number>(0);
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    const height = document.querySelector('#blog_right')?.clientHeight ?? 0;
    if (window.pageYOffset > height + 64) {
      if (!isFixed) {
        setIsFixed(true);
      }
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cs('article-category', { category_fixed: isFixed })}>
      <div className="search">
        <Input
          size="large"
          style={{ borderRadius: 20 }}
          placeholder="输入关键字搜索"
          suffix={<SearchOutlined className="linkHover" style={{ fontSize: 20 }} />}
        />
      </div>
      <div className="category-content">
        <ul
          onMouseLeave={() => {
            setCurrent(active);
          }}
        >
          <li className="slider" style={{ top: 40 * (current as number) }}></li>
          {list.map((item, index) => (
            <li
              key={index}
              className={cs({ 'is-active': index === active })}
              onMouseEnter={() => {
                setCurrent(index);
              }}
              onClick={() => {
                setActive(index);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticalCategory;
