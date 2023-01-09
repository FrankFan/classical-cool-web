import React from 'react'
import { FC } from 'react'
import ConnectWalletButton from '../ConnectWalletButton'
import logo from '@/assets/logo/logo2.svg'

import './index.less'
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <nav>
        <ul>
          <li>
            <a href='/#top'>首页</a>
          </li>
          <li className=''>
            <a href='/#booklist'>活动</a>
          </li>
          <li className=''>
            <a href='/#activity'>记录</a>
          </li>
          {/* <li className=''>
            <a href='#history'>历史</a>
          </li> */}
        </ul>
      </nav>
      <div className='btn'>
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </header>
  )
}

export default Header
