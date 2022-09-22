import useFetchMDContents from "@/hooks/useFetchMD";
import { FC } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactMarkdown from "react-markdown";

import "./style.less";

interface DetailProps {}

const files = [
  "https://arseed.web3infra.dev/OL3eJlojePz9fzsb7tMsp2XjHMdhahUGIDZOcXBfPeM",
  "https://arseed.web3infra.dev/CADqjs7464-t4iO7SbpNFSaVaKMtUMt1sYKnVT6Ud6M",
];
const Detail: FC<DetailProps> = () => {
  const markdowns = useFetchMDContents(files);
  console.log(markdowns);

  if (!markdowns.length) return null;

  return (
    <HTMLFlipBook
      className="flip-book"
      width={550}
      height={800}
      //   size="stretch"
      //   minHeight={420}
      //   minWidth={315}
      //   maxHeight={1350}
      //   maxWidth={1000}
      maxShadowOpacity={0.5}
      showCover
    >
      <div className="page page-cover page-cover-top" data-density="hard">
        <div className="page-content">
          <h2>BOOK TITLE</h2>
        </div>
      </div>
      {markdowns.map((md, idx) => {
        return (
          <div className="page" key={idx}>
            <div className="page-content">
              <h2 className="page-header">Page header {idx + 1}</h2>
              <div className="page-text">
                <ReactMarkdown key={idx}>{md}</ReactMarkdown>
              </div>
              <div className="page-footer">2</div>
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

export default Detail;
