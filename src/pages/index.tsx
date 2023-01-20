import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Container, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maskr</title>
        <meta name="description" content="maskr.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        gap={6}
        as={Container}
        align="center"
        maxW="container.lg"
        height="100vh"
      >
        <Header />
        <Hero />
        <Features />
        <Footer />
      </Stack>
    </>
  );
}
