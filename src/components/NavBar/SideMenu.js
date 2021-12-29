import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ItemMenuMobile } from "./MenuItem";
import { NavBarArray } from "./NavBarArray";
import React from "react";
import { SocialIcons } from "components/SocialIcons";
import { useApplicationContext } from "contexts/ApplicationContext";
import { CardSlider } from "components/CardSlider";
import { AdCard } from "components/AdCard";
import { AdCardArray } from "components/AdCard/AdCardArray";

export function SideMenu({ isOpen, onClose, reference }) {
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
  const { isMobile } = useApplicationContext();
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={reference}
    >
      <DrawerOverlay backdropFilter="blur(5px)" />
      <DrawerContent bg="#1C1C1C">
        <DrawerCloseButton color="white" />
        <Stack
          justifyContent="space-between"
          p="13%"
          h="100%"
          color="white"
          overflow={isMobile ? "scroll" : null}
        >
          <Stack spacing="5px" fontSize={{ base: "12", md: "15" }}>
            <Text fontSize="35px" mb="40px">
              MENU
            </Text>
            {NavBarArray.map((item, index) => {
              return (
                <ItemMenuMobile
                  key={`ItemMenu-${index}`}
                  item={item}
                  index={index}
                />
              );
            })}
          </Stack>
          <CardSlider
            mt="80px !important"
            settings={settings}
            reference={slider}
            color="white"
          >
            {AdCardArray.map((item, index) => {
              return (
                <AdCard
                  key={`AdCard-${index}`}
                  image={item.image}
                  text={item.text}
                  icon={item.icon}
                  price={item.price}
                  link={item.link}
                />
              );
            })}
          </CardSlider>
          <HStack mt="100px !important" mb="20px !important" spacing="auto">
            <Text fontStyle="italic" fontSize={{ base: "15", md: "18" }}>
              Follow us:
            </Text>{" "}
            <HStack spacing="5px">
              <SocialIcons size="25px" boxShadow="0 0 1em rgba(0,0,0, 1)" />
            </HStack>
          </HStack>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}
