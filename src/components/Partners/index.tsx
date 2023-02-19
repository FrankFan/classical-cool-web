import { Button, Space } from 'antd'
import { FC } from 'react'
import './index.less'

interface IProps {}

const Partners: FC<IProps> = () => {
  const logoUrl = 'https://via.placeholder.com/220x120'
  return (
    <div id='partners'>
      <h2>Partners</h2>
      <div className='partners-list'>
        <Space wrap style={{ gap: '20px' }}>
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
        </Space>
        <Space wrap style={{ gap: '20px' }}>
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
          <img src={logoUrl} alt='' />
        </Space>
      </div>
    </div>
  )
}

export default Partners
