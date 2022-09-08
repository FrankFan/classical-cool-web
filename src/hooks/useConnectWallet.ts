import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { useStore } from "./useStore";

const providerOptions: IProviderOptions = {
  walletlink: {
    package: null, // Required
    options: {
      appName: "Web 3 Modal ", // Required
      infuraId: process.env.INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: process.env.INFURA_KEY, // required
    },
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

export const useConnectWallet = () => {
  //   const [provider, setProvider] = useState<any>();
  //   const [library, setLibrary] = useState<ethers.providers.Web3Provider>();
  //   const [account, setAccount] = useState("");
  //   const [error, setError] = useState<any>("");
  //   const [chainId, setChainId] = useState<number>();
  //   const [network, setNetwork] = useState<number>();
  const {
    provider,
    setProvider,
    setEtherProvider,
    setAccount,
    setChainId,
    setError,
    setNetwork,
  } = useStore();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setEtherProvider(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
    }
  };
  const handleNetwork = (e: any) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };
  const refreshState = () => {
    setAccount("");
    setChainId(-1);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId: number) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);
  return { connectWallet, disconnect };
};
