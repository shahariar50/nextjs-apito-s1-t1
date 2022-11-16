// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="../styles" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
