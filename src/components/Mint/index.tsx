import { useStore } from '@/hooks/useStore';
import { FC } from 'react';
import { ethers } from 'ethers';
import abiClassicalBookNFT from '../../utils/ClassicalBookNFTAbi.json';

console.log('abi ', abiClassicalBookNFT);

interface RecordProps {}

const Mint: FC<RecordProps> = () => {
  const { account, etherProvider } = useStore();
  const signer = etherProvider?.getSigner();
  console.log(account);

  const mintNFT = async () => {
    const contractAddress = '0xd15294F1D0132ed5C46e3cf568CFfc717fC583F4';
    // contract
    const contract = new ethers.Contract(
      contractAddress,
      abiClassicalBookNFT,
      signer
    );
    console.log('contract ', contract);

    if (contract) {
      try {
        const bookId = '1';
        const res = await contract.mintTo(account, bookId);
        console.log('contract.mintTo res = ', res);

        // TODO: 请求服务器接口

        contract.on('mintEvent', (from, to, tokenId) => {
          // Toast.show({
          //   icon: 'success',
          //   content: `mint成功, NFT 编号${tokenId}`,
          // });
          // setTotal(tokenId.toNumber());
        });
        // Toast.show({
        //   icon: 'success',
        //   content: `mint申请已提交`,
        // });
      } catch (error: any) {
        console.log('error: ', error);
        if (error.code === 4001) {
          // Toast.show({
          //   content: `取消操作`,
          // });
        }
      }
    }
  };

  const mintHandler = () => {
    mintNFT();
  };

  return (
    <div className='mint'>
      <button style={{ color: 'black' }} onClick={mintHandler}>
        mint
      </button>
    </div>
  );
};

export default Mint;
