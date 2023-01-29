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
        <a href='/#top'>
          <img src={logo} alt='' />
        </a>
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
          <li className=''>
            <a target='_blank' href='https://fo8q1pmkw7j.typeform.com/to/Dt8LjRmJ'>
              合作申请
            </a>
          </li>
        </ul>
      </nav>
      <div className='connect-btn'>
        <ConnectWalletButton />
      </div>
    </header>
  )
}

export default Header
