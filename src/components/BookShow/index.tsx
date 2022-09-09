import { FC } from "react";
import "./index.css";
interface BookListProps {}

const BookList: FC<BookListProps> = () => {
  return (
    <div className="booklist-wrap ">
      <div className="booklist-image1-wrap">
        <img
          className="booklist-image1"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb67e314eb1444340ded80e81e715e35cb0c0f0899b05c12ebe39086e47b687ef"
        />
        <div className="booklist-image1-content">
          <div className="section_2 ">
            <div className="group_4 "></div>
          </div>
          <span className="booklist-image1-title">需要个标题（热卖中）</span>
          <div className="booklist-image1-bookname">周易</div>
          <div className="booklist-image1-desc">
            古圣先贤的智慧文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案古圣先贤的智慧文案文案文案文案文案文案文案文案文案文案文案文案
          </div>
          <div className="group_5 flex-row justify-between">
            <div className="group_6  align-center">
              <div className="group_7  align-center">
                <div className="box_2 "></div>
              </div>
            </div>
            <div className="booklist-image1-detail-btn">
              <div className="booklist-image1-detail-btn-left"></div>
              <div className="booklist-image1-detail-btn-top"></div>
              <div className="booklist-image1-detail-btn-right"></div>
              <div className="booklist-image1-detail-btn-bottom"></div>
              <span className="text_6">查看详情</span>
            </div>
          </div>
        </div>
      </div>
      <div className="booklist-image2-content">
        <div className="txt-shang">上</div>
        <div className="txt-shan">善</div>
        <div className="txt-ruo">若</div>
        <div className="txt-shui">水</div>
        <div className="booklist-image2-bookname">
          <span className="booklist-image2-bookname-txt">道德经</span>
        </div>
        <div className="booklist-image2-preview">即将于10月开始上链</div>
      </div>
    </div>
  );
};

export default BookList;
