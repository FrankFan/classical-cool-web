import useFetchMDContents from "@/hooks/useFetchMD";
import { FC } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactMarkdown from "react-markdown";

import "./style.scss";

interface DetailProps {}

const files = [
  "https://arseed.web3infra.dev/OL3eJlojePz9fzsb7tMsp2XjHMdhahUGIDZOcXBfPeM",
  "https://arseed.web3infra.dev/CADqjs7464-t4iO7SbpNFSaVaKMtUMt1sYKnVT6Ud6M",
];
const Detail: FC<DetailProps> = () => {
  const markdowns = useFetchMDContents(files);
  console.log(markdowns);

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
      <div className="page">
        <div className="page-content">
          <h2 className="page-header">Page header 1</h2>
          <div className="page-text">
            {markdowns.length > 0
              ? markdowns.map((md, idx) => {
                  return <ReactMarkdown key={idx}>{md}</ReactMarkdown>;
                })
              : null}
          </div>
          <div className="page-footer">2</div>
        </div>
      </div>
      <div className="page">
        <div className="page-content">
          <h2 className="page-header">Page header - 15</h2>
          {/* <div class="page-image" style="background-image: url(images/html/7.jpg)"></div> */}
          <div className="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
            mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
            Aenean vitae pellentesque erat. Integer non tristique quam.
            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
            metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
            accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
            sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
            convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
            Integer non tristique quam. Suspendisse rutrum, augue ac
            sollicitudin mollis, eros velit viverra metus, a venenatis tellus
            tellus id magna.
          </div>
          <div className="page-footer">16</div>
        </div>
      </div>
      <div className="page">
        <div className="page-content">
          <h2 className="page-header">Page header - 16</h2>
          {/* <div class="page-image" style="background-image: url(images/html/8.jpg)"></div> */}
          <div className="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
            mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
            Aenean vitae pellentesque erat. Integer non tristique quam.
            Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
            metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
            accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
            sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
            convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
            Integer non tristique quam. Suspendisse rutrum, augue ac
            sollicitudin mollis, eros velit viverra metus, a venenatis tellus
            tellus id magna.
          </div>
          <div className="page-footer">17</div>
        </div>
      </div>
      <div className="page page-cover page-cover-bottom" data-density="hard">
        <div className="page-content">
          <h2>THE END</h2>
        </div>
      </div>
    </HTMLFlipBook>
    // <div className="container">
    //   <div className="flip-book" id="demoBookExample">

    //   </div>
    // </div>
  );
};

export default Detail;
