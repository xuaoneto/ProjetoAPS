import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApplicationContextProvider } from "../src/contexts/ApplicationContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <ApplicationContextProvider>
          <Component {...pageProps} />
        </ApplicationContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
