'use client';

import { Button } from '@/components/ui/button';
import { useSDK } from '@metamask/sdk-react';

export const WalletButton = () => {
  const { sdk } = useSDK();

  const connectWallet = async () => {
    if (!sdk) {
      return;
    }

    try {
      await sdk.connect();
    } catch (error) {
      console.error(`No accounts found`, error);
    }
  };

  return <Button onClick={connectWallet}>Add wallet</Button>;
};
