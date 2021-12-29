import guitarBanner from "assets/images/guitarBanner.jpg";
import guitarBanner1 from "assets/images/guitarBanner1.jpg";
import { Text } from "@chakra-ui/react";
import logofender from "assets/images/logo-marcas/fender.svg";
import logogiannini from "assets/images/logo-marcas/giannini-logo.svg";

export const BannerArray = [
  {
    text: (
      <Text>
        Get the{" "}
        <Text
          as="span"
          fontWeight="bold"
          bgImage="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
          bgClip="text"
        >
          best
        </Text>{" "}
        out of your instrument with{" "}
        <Text
          as="span"
          fontWeight="bold"
          bgImage="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
          bgClip="text"
        >
          MusicalTuning
        </Text>
      </Text>
    ),
  },
  {
    text: (
      <Text>
        The{" "}
        <Text
          as="span"
          fontWeight="bold"
          bgImage="linear-gradient(to right, #faf29f, #e0cb7c, #c6a65c, #ab823f, #8f5f25)"
          bgClip="text"
        >
          best
        </Text>{" "}
        tuner on the web
      </Text>
    ),
  },
];
