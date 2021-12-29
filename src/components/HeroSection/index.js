import { CardSlider } from "components/CardSlider";
import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import guitarBanner from "assets/images/guitarBanner.jpg";
import guitarBanner1 from "assets/images/guitarBanner1.jpg";
import React from "react";
import { Banner } from "components/Banner";
import { BannerArray } from "components/Banner/BannerArray";

export function HeroSection() {
  const slider = React.useRef();

  const settings = {
    dots: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <CardSlider
      settings={settings}
      reference={slider}
      color="white"
      boxShadow="0 0 2em rgba(0,0,0, 0.4)"
    >
      {BannerArray.map((item, index) => {
        return <Banner key={`Banner-${index}`} text={item.text} />;
      })}
    </CardSlider>
  );
}
