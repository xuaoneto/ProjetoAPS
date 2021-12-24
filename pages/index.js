import { Box, Stack } from "@chakra-ui/react";
import { NavBar } from "components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MusicalTuning</title>
        <meta name="description" content="O melhor site de afinação" />
      </Head>
      <Box bg="#202020" fontFamily="PT Sans" w="100%" h="100vh">
        <NavBar />
      </Box>
    </>
  );
}
