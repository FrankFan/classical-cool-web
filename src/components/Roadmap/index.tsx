import { FC } from 'react'
import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

interface RoadMapProps {}
import './style.less'

const RoadMap: FC<RoadMapProps> = () => {
  const CustomDot = () => {
    return (
      <div className='parent-dot'>
        <div className='child-dot'></div>
      </div>
    )
  }
  return (
    <div className='road-map-block'>
      <div className='block-title'>Road Map</div>
      <div className='timeline-box'>
        <Timeline mode='alternate'>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q1</div>
              <div className='h3'>中国典籍首发</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q2</div>
              <div className='h3'>中国典颖持续 Mint，启动国际化而</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q3</div>
              <div className='h3'>和台湾、新加坡、香港博物馆建立连接</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q4</div>
              <div className='h3'>UGC，大学合作，用户自主永存论文…</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2024</div>
              <div className='h2'>Q1</div>
              <div className='h3'>平台化，上线增加时间胶囊系列</div>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default RoadMap
