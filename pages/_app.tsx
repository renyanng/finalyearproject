import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

const queryClient = new QueryClient();

const projectId = "50c21181f1d0c7b44011a168318acdc5";

const metadata = {
  name: "Renyan FYP",
  description: "Renyan FYP",
  url: "",
  icons: [""],
};

const chains = [arbitrumSepolia] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <ChakraProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Spinner />}>
              <Component {...pageProps} />
            </Suspense>
          </QueryClientProvider>
        </WagmiProvider>
      </ChakraProvider>
    </>
  );
}
