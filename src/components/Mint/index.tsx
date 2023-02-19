import { useStore } from '@/hooks/useStore'
import { FC } from 'react'
import { ethers } from 'ethers'
import abiClassicalBookNFT from '@/utils/ClassicalBookNFTAbi.json'
import Swal from 'sweetalert2'
import { message } from 'antd'

interface RecordProps {
  id: number
}

// 合约地址
const contractAddress = '0x8311D4CdF4EEB244936c2404d13B0EB9d02d5C67'

const Mint: FC<RecordProps> = ({ id }) => {
  const { account, etherProvider } = useStore()
  const signer = etherProvider?.getSigner()

  const mintNFT = async () => {
    if (!signer || !account) message.warning('please connect wallet first')

    // contract
    const contract = new ethers.Contract(contractAddress, abiClassicalBookNFT, signer)
    console.log(account, 'bookId = ', id)

    if (contract) {
      try {
        const bookId = id
        const res = await contract.mint(account, bookId, {
          value: ethers.utils.parseEther('0.0002'),
        })
        console.log('mint result = ', res)
        Swal.fire('Success', 'mint申请已提交', 'success')

        contract.on('MintEvent', (from, to, tokenId) => {
          console.log('触发mint事件', from, to, tokenId)
        })
      } catch (error: any) {
        console.log('error:', error)
      }
    }
  }

  const mintHandler = () => {
    mintNFT()
  }

  return (
    <div className='mint'>
      <button onClick={mintHandler}>Mint</button>
    </div>
  )
}

export default Mint
