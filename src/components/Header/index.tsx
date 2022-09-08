import React from "react";
import { FC } from "react";
import ConnectWalletButton from "../ConnectWalletButton";
import "./index.less";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/Home.html">首页</a>
          </li>
          <li className="">
            <a href="/Visit.html">导览</a>
          </li>
          <li className="">
            <a href="/shows.html">展览</a>
          </li>
          <li className="">
            <a href="/Events.html">教育</a>
          </li>
          <li className="">
            <a href="/Explore.html">探索</a>
          </li>
          <li className="">
            <a href="/Research.html">学术</a>
          </li>
          <li className="">
            <a href="/Creative.html">文创</a>
          </li>
          <li className="">
            <a href="/About.html">关于</a>
          </li>
        </ul>
      </nav>
      <div className="btn">
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </header>
  );
};

export default Header;
