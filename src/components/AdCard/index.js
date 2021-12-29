import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

export function AdCard({ image, text, icon, price, link }) {
  return (
    <Box w="100%" color="#faf29f" fontFamily="Ubuntu">
      <Flex w="100%" h="100%" justifyContent="space-around" alignItems="center">
        <Grid templateColumns="1fr 1fr" gap="15px">
          <Box
            my="auto !important"
            w="120px"
            h="120px"
            p="5px"
            bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
          >
            <Box
              w="100%"
              h="100%"
              borderRadius="8px"
              bgImage={image}
              bgSize="cover"
              bgPos="center"
            ></Box>
          </Box>
          <Stack alignItems="start" justifyContent="space-between">
            <Text fontSize="15" lineHeight="15px">
              {text}
            </Text>
            {icon ? (
              <Flex>
                <Text fontSize="10">Marca:</Text>{" "}
                <Image src={icon} w="30px" ml="15px" alt="Logo Marca" />
              </Flex>
            ) : null}
            {price ? (
              <Flex fontSize="10">
                <Text>Preço: {price}</Text>
              </Flex>
            ) : null}
            <Box
              bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
              p="2px"
            >
              <Button
                bg="#101010"
                as="a"
                href={link}
                fontSize="15"
                _hover={{ color: "black", bg: "transparent" }}
              >
                Comprar
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Flex>
    </Box>
  );
}
