import { useState } from "react";
import { createStore } from "hox";
import { ethers } from "ethers";

export const [useStore, StoreProvider] = createStore(() => {
  const [provider, setProvider] = useState<any>();
  const [etherProvider, setEtherProvider] =
    useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState("");
  const [error, setError] = useState<any>("");
  const [chainId, setChainId] = useState<number>();
  const [network, setNetwork] = useState<number>();

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
  };
});
