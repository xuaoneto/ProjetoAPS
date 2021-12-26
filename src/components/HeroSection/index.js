import { CardSlider } from "components/CardSlider";
import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import guitarBanner from "assets/images/guitarBanner.jpg";
import guitarBanner1 from "assets/images/guitarBanner1.jpg";
import React from "react";

export function HeroSection() {
  const slider = React.useRef();

  const settings = {
    dots: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <CardSlider
      settings={settings}
      reference={slider}
      color="white"
      fontWeight="bold"
    >
      <Box
        bgImage={guitarBanner.src}
        bgSize="cover"
        bgPos="50% 50%"
        w="100%"
        h="50vh"
      >
        <Text textAlign="center" m="auto 0" fontSize="50" fontFamily="PT Sans">
          Afine Seus Intrumentos e tire o melhor som
        </Text>
      </Box>
      <Box
        bgImage={guitarBanner1.src}
        bgSize="cover"
        w="100%"
        bgPos="50% 50%"
        h="50vh"
      >
        <Text textAlign="center" my="auto" fontSize="50" fontFamily="PT Sans">
          Afine Seus Intrumentos e tire o melhor som
        </Text>
      </Box>
    </CardSlider>
  );
}
