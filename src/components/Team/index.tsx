import { FC } from 'react'
import './index.less'
import TeamItem from './TeamItem'

interface TeamProps {}

const Team: FC<TeamProps> = () => {
  const teamMembers = [
    {
      userName: '姓名',
      jobTitle: '岗位',
      avatarUrl: 'https://via.placeholder.com/110x140',
      desc: ['11111111111111111', '22222222222222222222'],
    },
    {
      userName: '姓名1',
      jobTitle: '岗位1',
      avatarUrl: 'https://via.placeholder.com/110x140',
      desc: ['11111111111111111', '22222222222222222222'],
    },
    {
      userName: '姓名2',
      jobTitle: '岗位2',
      avatarUrl: 'https://via.placeholder.com/110x140',
      desc: ['11111111111111111', '22222222222222222222'],
    },
    {
      userName: '姓名1',
      jobTitle: '岗位1',
      avatarUrl: 'https://via.placeholder.com/110x140',
      desc: ['11111111111111111', '22222222222222222222'],
    },
  ]
  return (
    <div id='team'>
      <h2>Team</h2>
      <div className='team-members'>
        {teamMembers.map((team, index) => (
          <TeamItem key={index} {...team} />
        ))}
      </div>
    </div>
  )
}

export default Team
