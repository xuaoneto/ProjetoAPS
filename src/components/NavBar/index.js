import React from "react";
import { useRouter } from "next/router";
import { useApplicationContext } from "contexts/ApplicationContext";
import LogoImage from "assets/logo3.svg";
import Button from "ui/button";
import {
  Box,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { NavBarArray } from "./NavBarArray";
import { MenuIcon, XIcon } from "ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { HumbMenu } from "components/HumbMenu";
import { SideMenu } from "./SideMenu";

export function NavBar() {
  const { isMobile } = useApplicationContext();
  const [toggle, setToggle] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isMobileNavbarActive, setMobileNavbarActive] = React.useState(false);
  const router = useRouter();

  const MotionBox = motion(Box);

  return (
    <>
      <Flex
        width="100%"
        height="121px"
        alignItems="center"
        position="relative"
        bgColor="#101010"
        _after={{
          content: '""',
          width: "100%",
          height: "9px",
          display: "block",
          position: "absolute",
          bottom: "0",
          background:
            "linear-gradient(to right, #0B0B0B, #faf3a0, #905f26, #faf3a0, #0B0B0B)",
        }}
      >
        <Flex
          justifyContent="space-between"
          flex="auto"
          mx="8vw"
          alignItems="center"
        >
          <Image
            src={LogoImage.src}
            alt="Logo"
            w={{ base: "80px", xl: "6.2vw" }}
          />
          <HStack spacing="1em">
            {isMobile ? null : (
              <Box
                p="2px"
                bg="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
                mr="24px"
              >
                <ChakraButton
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
                    bg: "white",
                    color: "black",
                  }}
                  _focus={{ outline: "none" }}
                >
                  Create Account
                </ChakraButton>
              </Box>
            )}
            <HumbMenu
              ref={btnRef}
              toggle={isOpen}
              offToggle={onClose}
              onToggle={onOpen}
            />
          </HStack>
        </Flex>
      </Flex>
      {isMobile && (
        <AnimatePresence>
          {isMobileNavbarActive && (
            <MotionBox
              width="100%"
              display="block"
              position="absolute"
              top="112px"
              bgColor="#101010"
              zIndex="89"
              initial={{ height: "0px" }}
              animate={{
                height: `${
                  NavBarArray.filter((item) => item.format !== "button")
                    .length * 70
                }px`,
              }}
              exit={{ height: "0px" }}
              overflow="hidden"
            >
              <List>
                {NavBarArray &&
                  NavBarArray.map((item, index) => (
                    <ListItem key={`navbar-menu-item-${index}`} width="100%">
                      {item.format !== "button" && (
                        <>
                          {!item.exclude ? (
                            <Link
                              width="100%"
                              display="flex"
                              justifyContent="center"
                              href={item.href}
                              textDecoration="none"
                              py="24px"
                              color={
                                router && router.pathname === item.href
                                  ? "#faf3a0"
                                  : "white"
                              }
                              textTransform="uppercase"
                              fontSize="14px"
                              letterSpacing="1px"
                              borderBottom={`1px solid`}
                              borderColor={
                                router && router.pathname === item.href
                                  ? "#faf3a0"
                                  : index === NavBarArray.length - 2
                                  ? "transparent"
                                  : "secondary.300"
                              }
                              _hover={{
                                textDecoration: "none",
                                color: "#faf3a0",
                              }}
                              _focus={{ outline: "none" }}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            item.exclude
                              .filter((path) => router.pathname === path)
                              .map((subitem, index) => (
                                <Link
                                  key={`menu-subitem-${index}`}
                                  href={item.href}
                                  textDecoration="none"
                                  p="4px"
                                  color={
                                    router && router.pathname === item.href
                                      ? "#faf3a0"
                                      : "white"
                                  }
                                  textTransform="uppercase"
                                  fontSize="14px"
                                  letterSpacing="1px"
                                  borderBottom={`1px solid`}
                                  borderColor={
                                    router && router.pathname === item.href
                                      ? "#faf3a0"
                                      : "transparent"
                                  }
                                  _hover={{
                                    textDecoration: "none",
                                    color: "#faf3a0",
                                  }}
                                  _focus={{ outline: "none" }}
                                >
                                  {item.label}
                                </Link>
                              ))
                          )}
                        </>
                      )}
                    </ListItem>
                  ))}
              </List>
            </MotionBox>
          )}
        </AnimatePresence>
      )}
      <SideMenu isOpen={isOpen} onClose={onClose} reference={btnRef} />
    </>
  );
}
