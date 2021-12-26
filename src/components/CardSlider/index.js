import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";

import { useApplicationContext } from "contexts/ApplicationContext";

export function CardSlider({ children, reference, settings, ...rest }) {
  const { isMobile } = useApplicationContext();

  return (
    <Box position="relative" {...rest}>
      <Box overflow="hidden">
        <Slider {...settings} ref={reference}>
          {children}
        </Slider>
      </Box>
    </Box>
  );
}
