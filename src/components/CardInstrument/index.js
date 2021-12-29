import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function CardInstrument({ image, title, subtitle, link }) {
  return (
    <Stack
      w="100%"
      color="white"
      bg="#101010"
      boxShadow="0 0 2em rgba(0,0,0, 0.4)"
    >
      <Box bgImage={image} h="300px" bgSize="cover" bgPos="center" w="100%" />
      <Stack
        alignItems="start"
        justifyContent="space-between"
        p="15px 30px 30px"
        flex="auto"
        mt="0 !important"
      >
        <Box>
          <Text fontSize="25" mt="15px">
            {title}
          </Text>
          <Text fontFamily="300" mt="15px">
            {subtitle}
          </Text>
        </Box>
        <Box
          mt="30px !important"
          p="2px"
          bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
          mr="24px"
        >
          <Button
            size="medium"
            link="#"
            color="white"
            textTransform="uppercase"
            pl="24px"
            pr="24px"
            py="12px"
            as="a"
            letterSpacing="1px"
            transition="all .3s ease"
            bg="#101010"
            _hover={{
              bg: "linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)",
              color: "black",
            }}
            _active={{
              bg: "linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)",
              color: "black",
            }}
            _focus={{ outline: "none" }}
          >
            Tuning!
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
