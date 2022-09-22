import useFetchMDContents from "@/hooks/useFetchMD";
import { useParams } from "umi";

import { FC } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";

import "./index.less";
import "./style.scss";
import useBookInfo from "@/hooks/useBookInfo";

interface DetailProps {}
interface FlipBooksProps {
  id: string;
}

const FlipBooks: FC<FlipBooksProps> = ({ id }) => {
  const { title, mds = [] } = useBookInfo(id) ?? {};

  if (!mds.length) return <div>图书加载中...</div>;

  return (
    <HTMLFlipBook
      className="flip-book"
      width={800}
      height={800}
      // size="stretch"
      //   minHeight={420}
      //   minWidth={315}
      // maxHeight={1350}
      //   maxWidth={1000}
      maxShadowOpacity={0.5}
      showCover
    >
      <div className="page page-cover page-cover-top" data-density="hard">
        <div className="page-content">
          <h2>{title}</h2>
        </div>
      </div>
      {mds.map(({ text, idx, title }) => {
        return (
          <div className="page" key={idx}>
            <div className="page-content">
              <h2 className="page-header">
                {title} - {idx}
              </h2>
              <div className="page-text">
                <ReactMarkdown key={idx}>{text}</ReactMarkdown>
              </div>
              <div className="page-footer"></div>
            </div>
          </div>
        );
      })}

      <div className="page page-cover page-cover-bottom" data-density="hard">
        <div className="page-content">
          <h2>THE END</h2>
        </div>
      </div>
    </HTMLFlipBook>
  );
};

const Detail: FC<DetailProps> = () => {
  const params = useParams();
  const { id = "" } = params;

  return (
    <div className="home-box">
      <Header></Header>
      <div style={{ paddingTop: 60 }}>
        <FlipBooks id={id} />
      </div>
    </div>
  );
};

export default Detail;
