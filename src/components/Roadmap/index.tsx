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
              <div className='h3'>中国四书五经典籍首发</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q2</div>
              <div className='h3'>中国典籍持续 Mint，同步启动国际化典籍永存计划</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q3</div>
              <div className='h3'>博物馆、大学合作</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2023</div>
              <div className='h2'>Q4</div>
              <div className='h3'>支持 UGC 能力，用户自主永存论文等能力</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={CustomDot()}>
            <div className='content'>
              <div className='h1'>2024</div>
              <div className='h2'>Q1</div>
              <div className='h3'>平台化，时间胶囊系列</div>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default RoadMap
