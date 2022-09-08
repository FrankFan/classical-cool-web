import { useConnectWallet } from "@/hooks/useConnectWallet";
import { useStore } from "@/hooks/useStore";
import { truncateAddress } from "@/utils";
import { FC } from "react";

interface ConnectWalletButtonProps {}

const ConnectWalletButton: FC<ConnectWalletButtonProps> = () => {
  const { account } = useStore();
  const { connectWallet } = useConnectWallet();
  const handleConnectWallet = () => {
    connectWallet();
  };
  return (
    <div onClick={handleConnectWallet}>
      {account ? truncateAddress(account) : <div>连接钱包</div>}
    </div>
  );
};

export default ConnectWalletButton;
