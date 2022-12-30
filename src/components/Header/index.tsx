import React from 'react';
import { FC } from 'react';
import ConnectWalletButton from '../ConnectWalletButton';

import './index.less';
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          src='https://arseed.web3infra.dev/o81fZcXnJJYZrj4S5INq7OUhUI8I4uWOOK9NS2M8ixw'
          alt=''
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href='#top'>首页</a>
          </li>
          <li className=''>
            <a href='#booklist'>活动</a>
          </li>
          <li className=''>
            <a href='#activity'>记录</a>
          </li>
          {/* <li className="">
            <a href="#history">历史</a>
          </li> */}
        </ul>
      </nav>
      <div className='btn'>
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </header>
  );
};

export default Header;
