import React from "react";
import { FC } from "react";
import "./index.less";
import coverImg from "@/assets/img/1.png";
import titleImg from "@/assets/img/icon-1.png";
import Mint from "../Mint";
import { BackTop } from "antd";
import books from "@/data/books";
import { history } from "umi";

interface BookListProps {}

const BookList: FC<BookListProps> = () => {
  const makeBookList = () => {
    const goToDetail = (id: string) => {
      history.push(`/${id}`);
    };
    return books.map((item, idx) => {
      return (
        <div className="right">
          <div
            className="bg"
            style={{ backgroundImage: `url(${item.backgroudUrl})` }}
            key={idx}
          ></div>
          <div className="booklist-right-bookname">
            <span className="booklist-right-bookname-txt">{item.title}</span>
            <div className="booklist-right-bookname-bottom"></div>
          </div>
          {/* <div className="booklist-right-preview">即将于10月开始上链</div> */}
          <div style={{ display: "flex" }}>
            <Mint></Mint>
            <div
              className="mint"
              onClick={() => {
                goToDetail(item.itemId);
              }}
            >
              <button>Read</button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="bookList" id="booklist">
      <p className="desc">
        790,028 <span>守护者</span>
      </p>
      <div className="book-container">
        {/* <div className="left">
          <img src={coverImg} alt="" className="cover" />
          <div className="content">
            <p className="title">
              <img className="title-icon" src={titleImg} alt="" />
              <span>论语通俗流传版 NFT（0.1 ETH）</span>
            </p>
            <p className="author">孔子</p>
            <article>
              春秋时期思想家、教育家孔子的弟子及再传弟子记录孔子及其弟子言行而编成的语录文集，成书于战国前期。全书共20篇492章，以语录体为主，叙事体为辅，较为集中地体现了孔子及儒家学派的政治主张、伦理思想、道德观念、教育原则等。
            </article>
            <div className="operator-wrap">
              <div className="visitor">
              </div>
              <a href="" className="btn-box">
                查看详情
              </a>
            </div>
          </div>
        </div> */}
        {makeBookList()}
      </div>
    </div>
  );
};

export default BookList;
