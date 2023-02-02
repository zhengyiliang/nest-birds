import React, { ReactNode } from 'react';
import './index.less';

interface ItemProps {
  text?: string;
  id?: string;
}

export interface ArticalTopProps {
  title: ReactNode;
  list?: ItemProps[];
}

const list: ArticalTopProps['list'] = [
  {
    text: '2018最新版QQ音乐api调用12321312321312311',
  },
  {
    text: '2018最新版QQ音乐api调用12321312321312311',
  },
  {
    text: '2018最新版QQ音乐api调用12321312321312311',
  },
  {
    text: '2018最新版QQ音乐api调用12321312321312311',
  },
];

const ArticalTop = (props: ArticalTopProps) => {
  const { title } = props;

  return (
    <>
      <div className="artical-top">
        <div className="top-title">{title}</div>
        <div className="top-content">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticalTop;
