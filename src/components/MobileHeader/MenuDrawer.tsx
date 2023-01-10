import { FC, useEffect, useState } from 'react'
import { Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'

interface MenuDrawerProps {
  visible: boolean
  onPopupClose: () => void
}

const MenuDrawer: FC<MenuDrawerProps> = ({ visible, onPopupClose }) => {
  const navigate = useNavigate()

  const [internalVisible, setInvernalVisible] = useState(false)

  useEffect(() => {
    setInvernalVisible(visible)
  }, [visible])

  return (
    <div>
      <Drawer
        closable={false}
        open={visible}
        onClose={() => {
          onPopupClose()
          // setInvernalVisible(false)
        }}
        drawerStyle={{ background: 'rgb(200 184 160 / 60%)' }}>
        <div className='popup-menu'>
          <div
            className='btn-close'
            onClick={() => {
              onPopupClose()
            }}>
            <CloseOutlined />
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
        </div>
      </Drawer>
    </div>
  )
}

export default MenuDrawer
