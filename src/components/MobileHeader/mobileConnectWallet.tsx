import { useConnectWallet } from '@/hooks/useConnectWallet'
import { useStore } from '@/hooks/useStore'
import { truncateAddress } from '@/utils'
import { DisconnectOutlined, WalletOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'

interface ConnectWalletButtonProps {}

export const MobileConnectWallet: FC<ConnectWalletButtonProps> = () => {
  const { account } = useStore()
  const { connectWallet, disconnect } = useConnectWallet()

  const handleConnectWallet = () => {
    if (!account) {
      connectWallet()
    }
  }

  const handleDisconnectWallet = () => {
    disconnect()
  }

  return (
    <div className='mobile__connect-wallet'>
      <div onClick={handleConnectWallet} className='mobile__connect-wallet-box'>
        <WalletOutlined />
        <span>{account ? truncateAddress(account) : '连接钱包'}</span>
      </div>
      <div
        onClick={handleDisconnectWallet}
        className='mobile__connect-wallet-disconnect'
        style={{ display: account ? 'block' : 'none' }}>
        <p>
          <DisconnectOutlined />
          <span>断开连接</span>
        </p>
      </div>
    </div>
  )
}
