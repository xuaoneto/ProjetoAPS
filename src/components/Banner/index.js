import { Box, Flex, Text } from "@chakra-ui/react";

export function Banner({ image, text, index }) {
  return (
    <Box bgImage={image} bgSize="cover" w="100%" bgPos="50% 50%" h="50vh">
      <Flex w="100%" h="100%" p="80px 180px" alignItems="center">
        <Text fontSize="50" ml="auto" fontFamily="Ubuntu">
          {text}
        </Text>
      </Flex>
    </Box>
  );
}
