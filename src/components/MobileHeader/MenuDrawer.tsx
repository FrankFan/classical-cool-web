import { FC, useEffect, useState } from 'react'
import { Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import { MobileConnectWallet } from './mobileConnectWallet'

interface MenuDrawerProps {
  visible: boolean
  onPopupClose: () => void
}

const MenuDrawer: FC<MenuDrawerProps> = ({ visible, onPopupClose }) => {
  return (
    <div>
      <Drawer
        closable={false}
        open={visible}
        onClose={() => {
          onPopupClose()
        }}
        placement='right'
        width='230px'
        drawerStyle={{ background: 'rgb(200 184 160 / 60%)' }}>
        <div className='popup-menu'>
          <div className='popup-menu_top'>
            <div
              className='btn-close'
              onClick={() => {
                onPopupClose()
              }}>
              <CloseOutlined />
            </div>
          </div>
          <div
            className='navs'
            onClick={() => {
              onPopupClose()
            }}>
            <li>
              <a href='/#top'>首页</a>
            </li>
            <li>
              <a href='/#booklist'>活动</a>
            </li>
            <li>
              <a href='/#activity'>记录</a>
            </li>
          </div>
          <div className='connect-wallet'>
            <MobileConnectWallet />
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default MenuDrawer
