import { CardSlider } from "components/CardSlider";
import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import guitarBanner from "assets/images/guitarBanner.jpg";
import guitarBanner1 from "assets/images/guitarBanner1.jpg";
import React from "react";
import { Banner } from "components/Banner";

export function HeroSection() {
  const slider = React.useRef();

  const settings = {
    dots: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <CardSlider settings={settings} reference={slider} color="white">
      <Banner
        image={guitarBanner.src}
        text={
          <Text>
            Tire o{" "}
            <Text as="span" fontWeight="bold" color="#faf3a0">
              Melhor
            </Text>{" "}
            do seu instrumento
          </Text>
        }
      />
      <Banner
        image={guitarBanner1.src}
        index="1"
        text={
          <Text>
            Tire o{" "}
            <Text as="span" fontWeight="bold" color="#faf3a0">
              Melhor
            </Text>{" "}
            do seu instrumento
          </Text>
        }
      />
    </CardSlider>
  );
}
