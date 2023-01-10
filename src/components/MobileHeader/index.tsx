import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import MenuDrawer from './MenuDrawer'
import logo from '@/assets/logo/logo2.svg'

export const MobileHeader = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className='mobile-header'>
        <div className='h-left'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </div>
        <div
          className='h-right'
          onClick={() => {
            setVisible(true)
          }}>
          <MenuOutlined style={{ color: '#c8b8a0' }} />
        </div>
      </div>
      <MenuDrawer
        visible={visible}
        onPopupClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}
