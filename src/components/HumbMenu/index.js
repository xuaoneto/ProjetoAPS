import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export function HumbMenu({ toggle, onToggle, offToggle, ...rest }) {
  return (
    <Stack
      spacing="5px"
      m="0"
      onClick={toggle ? offToggle : onToggle}
      {...rest}
    >
      <Box
        w="2rem"
        h="2px"
        bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
        transition="all 0.3s linear"
        transform={toggle ? "rotate(-45deg) translateY(10px)" : "rotate(0)"}
      />
      <Box
        w="2rem"
        h="2px"
        bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
        transition="all 0.3s linear"
        opacity={toggle ? "0" : "1"}
        transform={toggle ? "translateX(-2rem)" : "translateX(0)"}
      />
      <Box
        w="2rem"
        h="2px"
        bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
        transition="all 0.3s linear"
        transform={toggle ? "rotate(45deg) translateY(-10px)" : "rotate(0)"}
      />
    </Stack>
  );
}
