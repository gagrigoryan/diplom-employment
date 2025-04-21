"use client";

import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";

type MetamaskWrapperProps = {
  children?: React.ReactNode;
};

export const MetamaskWrapper = ({ children }: MetamaskWrapperProps) => {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

  return (
    <MetaMaskProvider debug={true} sdkOptions={sdkOptions}>
      {children}
    </MetaMaskProvider>
  );
};
