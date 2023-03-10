import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="ltr">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body style={{ backgroundColor: "#171925" }}>
        <ColorModeScript initialColorMode="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
