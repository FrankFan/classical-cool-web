import { useConnectWallet } from '@/hooks/useConnectWallet'
import { useStore } from '@/hooks/useStore'
import { truncateAddress } from '@/utils'
import { DisconnectOutlined, WalletOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'

interface ConnectWalletButtonProps {}

const ConnectWalletButton: FC<ConnectWalletButtonProps> = () => {
  const { account } = useStore()
  const { connectWallet, disconnect } = useConnectWallet()
  const [showDisconnectBtn, setShowDisconnectBtn] = useState(false)

  const onHover = () => {
    setShowDisconnectBtn(true)
  }

  const onLeave = () => {
    setShowDisconnectBtn(false)
  }

  const handleConnectWallet = () => {
    if (account) {
      setShowDisconnectBtn(true)
    } else {
      connectWallet()
    }
  }

  const handleDisconnectWallet = () => {
    disconnect()
    setShowDisconnectBtn(false)
  }

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div onClick={handleConnectWallet} className='btn-box'>
        <WalletOutlined />
        <span>{account ? truncateAddress(account) : '连接钱包'}</span>
      </div>
      <div
        onClick={handleDisconnectWallet}
        className='btn-box'
        style={{ display: account && showDisconnectBtn ? 'block' : 'none' }}>
        <DisconnectOutlined />
        <span>断开连接</span>
      </div>
    </div>
  )
}

export default ConnectWalletButton
