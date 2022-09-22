import { FC, useEffect, useRef, useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { genAPI, getOrders } from "arseeding-js";

interface DemoPageProps {}

const DemoPage: FC<DemoPageProps> = () => {
  const [address, setAddress] = useState<string>("");
  const arseedingUrl = "https://arseed.web3infra.dev";
  const instance = useRef<any>();
  const [orders, setOrders] = useState<any>([]);
  useEffect(() => {
    (async () => {
      console.log("window.ethereum", window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);

      instance.current = await genAPI(window.ethereum);
    })();
  }, []);
  const props: UploadProps = {
    name: "file",

    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    customRequest({
      action,
      data,
      file,
      filename,
      headers,
      onError,
      onProgress,
      onSuccess,
      withCredentials,
    }: any) {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      console.log(file);

      fileReader.onload = async (event) => {
        console.log(event);

        // const data = Buffer.from("abc");
        const data = event.target?.result;
        const payCurrency = "usdc"; // everpay supported all tokens
        const ops = {
          tags: [
            { name: "Content-Type", value: file.type ?? "unkonwn" },
            { name: "fileName", value: file.name ?? "" },
          ],
        };
        try {
          const res = await instance.current?.sendAndPay(
            arseedingUrl,
            data,
            payCurrency,
            ops
          );
          console.log("res", res);

          console.log("Complete File read successfully!", event);
        } catch (error) {
          console.log(error);
        }
      };
      // console.log(typeof file);
      // const formData = new FormData();
      // if (data) {
      //   Object.keys(data).forEach((key) => {
      //     formData.append(key, data[key]);
      //   });
      // }
      // formData.append(filename, file);
      return {
        abort() {
          console.log("upload progress is aborted.");
        },
      };
    },
  };
  const handleGetAllOrderByAddress = async () => {
    const res = await getOrders(arseedingUrl, address);
    console.log(res);

    // setOrders(res);
  };
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <div>
        <Button onClick={handleGetAllOrderByAddress}>
          获取 address 所有的 order
        </Button>
        <div>{orders}</div>
      </div>
    </div>
  );
};

export default DemoPage;
