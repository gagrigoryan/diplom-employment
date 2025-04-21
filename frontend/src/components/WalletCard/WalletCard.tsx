import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';

type WalletCardProps = React.ComponentPropsWithoutRef<'article'> & {
  title: string;
  account: string;
  balance: string;
  isActive?: boolean;
  isUsed?: boolean;
};

export const WalletCard = React.forwardRef<HTMLDivElement, WalletCardProps>(
  ({ title, account, balance, isActive, isUsed, className }, ref) => {
    return (
      <article className={className} ref={ref}>
        <Card className="flex w-full">
          <CardHeader className="w-full">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="truncate">{account}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span
                className={cn('flex h-2 w-2 rounded-full bg-red-400', isActive && 'bg-sky-500')}
              />
              {balance && <span>{balance} ETH</span>}
            </div>
          </CardContent>
          <CardFooter>
            {isUsed ? (
              <Button variant="outline" disabled>
                Used
              </Button>
            ) : (
              <>
                {isActive ? (
                  <Button>Attach Wallet</Button>
                ) : (
                  <Button variant="outline">Activate</Button>
                )}
              </>
            )}
          </CardFooter>
        </Card>
      </article>
    );
  }
);
