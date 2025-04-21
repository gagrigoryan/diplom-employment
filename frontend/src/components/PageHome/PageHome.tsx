'use client';

import { useSDK } from '@metamask/sdk-react';
import { useEffect, useState } from 'react';
import { BrowserProvider, formatEther } from 'ethers';
import { WalletButton } from '@/components/WalletButton';
import { WalletCard } from '@/components/WalletCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';
import { ContractForm } from '@/components/ContractForm';

export const PageHome = () => {
  const { sdk, connected, account } = useSDK();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const getBalance = async () => {
      if (!account || !connected) return;

      const provider = new BrowserProvider(sdk?.getProvider());
      const balanceBN = await provider.getBalance(account);
      const balance = formatEther(balanceBN);
      setBalance(balance);
    };

    getBalance();
  }, [account, connected, sdk]);

  return (
    <main className="bg-background text-foreground py-8">
      <div className="container">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Accounts</h3>
        <ul className="mt-6 grid grid-cols-3 gap-5">
          <li>
            <WalletCard title="Main wallet" account={account!} balance={balance!} isActive isUsed />
          </li>
          <li>
            <WalletCard
              title="Test wallet"
              account="0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097"
              balance={'5320.0'}
            />
          </li>
        </ul>

        <div className="mt-16 w-[600px]">
          <ContractForm />
        </div>

        <div className="mt-16">
          <WalletButton />
        </div>
      </div>

      <Dialog>
        <DialogContent className="w-96">
          <DialogHeader className="hidden">
            <DialogTitle>Attach wallet</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" className="bg-black dark:bg-white" />

            <div className="text-center">
              <DialogDescription>Передача подписей...</DialogDescription>
              <DialogDescription>Подождите немного</DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};
