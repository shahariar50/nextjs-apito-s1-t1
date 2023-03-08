// pages/_document.js
import { Head, Html, Main, NextScript } from "next/document";

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
