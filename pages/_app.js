import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApplicationContextProvider } from "../src/contexts/ApplicationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
