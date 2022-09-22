import { useEffect, useState } from "react";
import books from "@/data/books";
// https://arseed.web3infura.io/bundle/tx/_JFTgEnuWIpp2qWxMv9Fm1_aghO_gUbeim_rZKavS1I/data
const url = "https://arseed.web3infura.io/bundle/tx";

const getKeyInfo = (key: string) => {
  const str = key.split(".")[0];
  const [idx, title] = str.split("_");
  return { idx: Number(idx), title };
};

const useBookInfo = (itemId: string) => {
  const [info, setInfo] = useState<{
    itemId: string;
    title: string;
    mds: {
      text: string;
      idx: number;
      title: string;
    }[];
  } | null>(null);

  useEffect(() => {
    (async () => {
      const book = books.find((b) => b.itemId === itemId);
      if (book) {
        const { itemId, title } = book;
        const res = await fetch(`${url}/${itemId}/data`);
        const json = await res.json();
        const { paths = {} } = json;
        const results = Object.keys(paths)
          .map((key) => {
            const obj = paths[key];
            const bookId = obj["id"];
            const keyInfo = getKeyInfo(key);
            return {
              ...keyInfo,
              url: `https://arseed.web3infra.dev/${bookId}`,
            };
          })
          .sort((a, b) => a.idx - b.idx);
        const promisMDs = results.map(async (bookInfo) => {
          const { url, idx, title } = bookInfo;
          const res = await fetch(url);
          const text = await res.text();

          return { text, idx, title };
        });
        const mds = await Promise.all(promisMDs);
        setInfo({ itemId, title, mds });
      }
    })();
  }, [itemId]);

  return info;
};

export default useBookInfo;
