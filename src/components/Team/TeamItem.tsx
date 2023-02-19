import { FC } from 'react'
import './index.less'

interface TeamItemProps {
  userName: string
  jobTitle: string
  avatarUrl: string
  desc: string[]
}

const TeamItem: FC<TeamItemProps> = ({ userName, jobTitle, avatarUrl, desc }) => {
  return (
    <div className='team-item'>
      <div className='team-item__avatar'>
        <div className='username'>{userName}</div>
        <div className='img-wrap'>
          <img src={avatarUrl} alt='' />
          <div className='jobtitle'>{jobTitle}</div>
        </div>
      </div>
      <div className='team-item__desc'>
        <ul>
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamItem
