import React from 'react'
import { FC } from 'react'
import './index.less'
import logo from '@/assets/logo/logo2.svg'

interface FooterProps {}

const year = new Date().getFullYear()

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer_left'>
          <img src={logo} alt='' />
        </div>
        <div className='footer_right'>
          <a target='_blank' href='https://fo8q1pmkw7j.typeform.com/to/Dt8LjRmJ'>
            合作申请
          </a>
          <a target='_blank' href='https://github.com/classical-cool'>
            Github
          </a>
          <a target='_blank' href='https://twitter.com/classical-cool'>
            Twitter
          </a>
        </div>
      </div>
      <div className='copyright'>©{year} Classical.cool All Rights Reserved</div>
    </>
  )
}

export default Footer
