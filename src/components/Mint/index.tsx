import { useStore } from '@/hooks/useStore';
import { FC } from 'react';
import { ethers } from 'ethers';
import abiClassicalBookNFT from '@/utils/ClassicalBookNFTAbi.json';
import Swal from 'sweetalert2';

interface RecordProps {
  id: number;
}

// 合约地址
const contractAddress = '0xd15294F1D0132ed5C46e3cf568CFfc717fC583F4';

const Mint: FC<RecordProps> = ({ id }) => {
  const { account, etherProvider } = useStore();
  const signer = etherProvider?.getSigner();
  // console.log(account, 'bookId = ', id);

  const mintNFT = async () => {
    // contract
    const contract = new ethers.Contract(
      contractAddress,
      abiClassicalBookNFT,
      signer
    );

    if (contract) {
      try {
        const bookId = id;
        const res = await contract.mintTo(account, bookId);
        console.log('mint result = ', res);
        Swal.fire('Success', 'mint申请已提交', 'success');

        contract.on('mintEvent', (from, to, tokenId) => {
          console.log('触发mint事件', from, to, tokenId);
        });
      } catch (error: any) {
        console.log('error:', error);
      }
    }
  };

  const mintHandler = () => {
    mintNFT();
  };

  return (
    <div className='mint'>
      <button onClick={mintHandler}>Mint</button>
    </div>
  );
};

export default Mint;
