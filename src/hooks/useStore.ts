import { useEffect, useState } from 'react'
import { createStore } from 'hox'
import { ethers } from 'ethers'
import { checkIfWalletConnected } from '@/utils'
import Web3Modal, { IProviderOptions } from 'web3modal'
import WalletConnect from '@walletconnect/web3-provider'

const providerOptions: IProviderOptions = {
  walletlink: {
    package: null, // Required
    options: {
      appName: 'Web 3 Modal ', // Required
      infuraId: 'e933b8519cd9460c9ba51b501425f33b', // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: 'e933b8519cd9460c9ba51b501425f33b', // required
    },
  },
}

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
})
export const [useStore, StoreProvider] = createStore(() => {
  const [provider, setProvider] = useState<any>()
  const [etherProvider, setEtherProvider] = useState<ethers.providers.Web3Provider>()
  const [account, setAccount] = useState('')

  const [error, setError] = useState<any>('')
  const [chainId, setChainId] = useState<number>()
  const [network, setNetwork] = useState<number>()

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setEtherProvider(library)
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error) {
      setError(error)
    }
  }

  const refreshState = () => {
    setAccount('')
    setChainId(-1)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const address = await checkIfWalletConnected()
  //       if (address !== '') {
  //         connectWallet()
  //       }
  //     } catch (error) {
  //       return ''
  //     }
  //   })()
  // }, [])

  return {
    provider,
    etherProvider,
    account,
    chainId,
    network,
    error,
    setProvider,
    setEtherProvider,
    setAccount,
    setChainId,
    setError,
    setNetwork,
    connectWallet,
    disconnect,
  }
})
