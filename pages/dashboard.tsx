import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { DataDisplay, DataTransactions } from "../components";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlockSafe</title>
        <meta name="description" content="Project built Renyan's FYP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container padding={10} maxW={"container.lg"}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D95QZF84HQ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D95QZF84HQ');
        `}
        </Script>
        <w3m-button />
        <DataDisplay />
        <DataTransactions />
      </Container>
    </div>
  );
}
