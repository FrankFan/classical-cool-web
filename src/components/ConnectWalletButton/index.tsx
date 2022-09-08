import { useConnectWallet } from "@/hooks/useConnectWallet";
import { useStore } from "@/hooks/useStore";
import { FC } from "react";

interface ConnectWalletButtonProps {}

const ConnectWalletButton: FC<ConnectWalletButtonProps> = () => {
  const { account } = useStore();
  const { connectWallet } = useConnectWallet();
  const handleConnectWallet = () => {
    connectWallet();
  };
  return <div onClick={handleConnectWallet}>连接钱包: {account}</div>;
};

export default ConnectWalletButton;
