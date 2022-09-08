import React from 'react';
import { FC } from 'react';
import './index.less';
import coverImg from '@/assets/img/1.png';

interface BookListProps {}

const BookList: FC<BookListProps> = () => {
  return (
    <div className="bookList">
      <p className="desc">
        790,028 <span>守护者</span>
      </p>
      <div className="book-container">
        <div className="left">
          <img src={coverImg} alt="" className="cover" />
          <div className="content">
            <p>孔子</p>
            <article>1233333333</article>
            <a href="" className="btn-box">查看详情</a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="" alt="" className="coming-soon-book" />
      </div>
    </div>
  );
};

export default BookList;
