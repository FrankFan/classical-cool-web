import { useEffect, useState } from "react";

const useFetchMDContents = (files: string[]) => {
  const [markdowns, setMarkdowns] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      if (files.length) {
        const promisMDs = files.map(async (url) => {
          const res = await fetch(url);
          const text = await res.text();

          return text;
        });
        const mds = await Promise.all(promisMDs);
        setMarkdowns(mds);
      }
    })();
  }, [files]);

  return markdowns;
};

export default useFetchMDContents;
