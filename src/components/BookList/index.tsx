import React from "react";
import { FC } from "react";
import "./index.less";
import coverImg from "@/assets/img/1.png";
import titleImg from "@/assets/img/icon-1.png";

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
            <p className="title">
              <img className="title-icon" src={titleImg} alt="" />
              <span>需要个标题（热卖中）</span>
            </p>
            <p className="author">孔子</p>
            <article>
              古圣先贤的智慧文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案古圣先贤的智慧文案文案文案文案文案文案文案文案文案文案文案文案
            </article>
            <div className="operator-wrap">
              <div className="visitor">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <a href="" className="btn-box">
                查看详情
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          {/* <img src="" alt="" className="coming-soon-book" /> */}
          <div className="booklist-right-bookname">
            <span className="booklist-right-bookname-txt">道德经</span>
            <div className="booklist-right-bookname-bottom"></div>
          </div>
          <div className="booklist-right-preview">即将于10月开始上链</div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
