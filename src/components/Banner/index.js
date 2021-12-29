import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

export function Banner({ text }) {
  return (
    <>
      <Box w="100%" bg="#101010" h="50vh">
        <Flex w="100%" h="100%" p="80px 10vw" alignItems="center">
          <Fade duration={0.7}>
            <Text
              fontSize={{ base: "30", md: "35", lg: "40", xl: "50" }}
              ml="auto"
              fontFamily="Ubuntu"
            >
              {text}
            </Text>
          </Fade>
        </Flex>
      </Box>
    </>
  );
}
