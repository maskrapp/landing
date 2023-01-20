import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024",
      xl: "1280",
      "2xl": "1536px",
    },
  };

  const theme = extendTheme({
    config,
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
