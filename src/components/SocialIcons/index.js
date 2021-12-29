import { Link, Image } from "@chakra-ui/react";
import facebook from "assets/icons/social-icons/facebook.svg";
import twitter from "assets/icons/social-icons/twitter.svg";
import linkedin from "assets/icons/social-icons/linkedin.svg";
import instagram from "assets/icons/social-icons/instagram.svg";
import youtube from "assets/icons/social-icons/youtube.svg";

export function SocialIcons({ size = "30px", spacing = null, ...rest }) {
  return (
    <>
      <Link
        borderRadius="50%"
        href="#"
        _hover={{ bg: "#1877F2" }}
        {...rest}
        mr={spacing}
      >
        <Image alt="facebook icon" w={size} src={facebook.src} />
      </Link>
      <Link
        borderRadius="50%"
        href="#"
        _hover={{ bg: "#1DA1F2" }}
        {...rest}
        mr={spacing}
      >
        <Image alt="twitter icon" w={size} src={twitter.src} />
      </Link>
      <Link
        borderRadius="50%"
        href="#"
        _hover={{ bg: "#0A66C2" }}
        {...rest}
        mr={spacing}
      >
        <Image alt="linkedin icon" w={size} src={linkedin.src} />
      </Link>
      <Link
        borderRadius="50%"
        href="#"
        _hover={{ bg: "#E4405F" }}
        {...rest}
        mr={spacing}
      >
        <Image alt="instagram icon" w={size} src={instagram.src} />
      </Link>
      <Link borderRadius="50%" href="#" _hover={{ bg: "#CD201F" }} {...rest}>
        <Image alt="youtube icon" w={size} src={youtube.src} />
      </Link>
    </>
  );
}
