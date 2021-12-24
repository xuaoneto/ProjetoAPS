import { Stack, Text, Link, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowMenuItem } from "ui/icons";
import React from "react";

export function ItemMenuMobile({
  item,
  index,

  ...rest
}) {
  const [isSubMenu, setSubMenu] = React.useState();
  const router = useRouter();
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <Box
        p="2px"
        bg={
          router.pathname === item.link
            ? "linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
            : "#1C1C1C"
        }
        color="white"
        _hover={{
          bg:
            router.pathname === item.link
              ? "linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
              : "linear-gradient(to right, rgba(250, 242, 159, 0.4), rgba(224, 203, 124, 0.4), rgba(198, 166, 92, 0.4), rgba(171, 130, 63, 0.4), rgba(143, 95, 37, 0.4))",
        }}
      >
        <Link
          bg="#1c1c1c"
          href={item.link ? item.link : null}
          target={item.external ? "_blank" : "_self"}
          px="10px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="space-between"
          display="flex"
          key={`Item-${index}`}
          h="40px"
          w="100%"
          _hover={{
            textDecor: "none",
            color: router.pathname === item.link ? "black" : "white",
            fontWeight: router.pathname === item.link ? "bold" : "normal",
            bg:
              router.pathname === item.link
                ? "linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
                : "#1c1c1c",
          }}
          onClick={item.subitems ? () => setSubMenu(!isSubMenu) : null}
          {...rest}
        >
          <Text>{item.name}</Text>
          {item.subitems ? (
            <Box
              transition="transform .3s ease"
              transform={isSubMenu ? "rotate(90deg)" : null}
            >
              <ArrowMenuItem color="white" size="15px" />
            </Box>
          ) : null}
        </Link>
      </Box>
      {item.subitems ? (
        <Stack
          pl="20px"
          overflow="hidden"
          transition="height .3s ease"
          h={isSubMenu ? `${item.subitems.length * 40}px` : "0"}
        >
          {item.subitems.map((item, index) => {
            return (
              <Link
                bg={
                  router.pathname === item.link
                    ? () => {
                        setSubMenu(true);
                        return "secondary.700";
                      }
                    : "transparent"
                }
                href={item.link ? item.link : null}
                target={item.external ? "_blank" : "_self"}
                px="10px"
                alignItems="center"
                justifyContent="space-between"
                display="flex"
                key={`subitem-${index}`}
                h="40px"
                w="100%"
                _hover={{ textDecor: "none" }}
              >
                <Text>{item.name}</Text>
              </Link>
            );
          })}
        </Stack>
      ) : null}
    </>
  );
}
