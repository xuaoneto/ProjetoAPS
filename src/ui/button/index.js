import { Button as ChakraButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Button({
  size = "auto",
  shapes = "square",
  prefix,
  sufix,
  prefixCss,
  sufixCss,
  align = "center",
  variant = "primary",
  disabled,
  css,
  link,
  children,
  withOverAnimation,
  ...rest
}) {
  const variants = {
    sizes: {
      auto: {
        height: "auto",
        fontSize: "16px",
        lineHeight: "normal",
        padding: "12px 40px",
      },
      small: {
        height: "32px",
        fontSize: "14px",
        lineHeight: "normal",
        padding: "0 12px",
      },
      medium: {
        height: "40px",
        fontSize: "14px",
        lineHeight: "20px",
        padding: "0 12px",
      },
      large: {
        height: "48px",
        fontSize: "16px",
        lineHeight: "24px",
        padding: "0 12px",
      },
    },
    shapes: {
      circle: 9999,
      square: 0,
    },
    align: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      grow: "space-between",
    },
    theme: {
      secondary: {
        color: "#ffffff",
        bgColor: "#101010",
        hover: {
          color: "black",
          bgColor: "white",
        },
      },
      third: {
        color: "#ffffff",
        bgColor: "#faf3a0",
        borderColor: "#faf3a0",
        hover: {
          color: "black",
          bgColor: "white",
        },
      },
      primary: {
        color: "#ffffff",
        bgColor: "#faf3a0",
        hover: {
          color: "#ffffff",
          bgColor: "#905f26",
        },
      },
    },
  };

  const textMotion = {
    hover: { ...withOverAnimation },
  };

  const MotionButton = motion(ChakraButton);
  const MotionText = motion(Text);

  return (
    <MotionButton
      href={link}
      height={variants.sizes[size].height}
      display="flex"
      alignItems="center"
      justifyContent={variants.align[align]}
      p={`${shapes === "circle" ? "0" : variants.sizes[size].padding}`}
      cursor="pointer"
      border={`2px solid ${variant === "primary" ? "transparent" : "#ffffff"}`}
      borderRadius={`${variants.shapes[shapes]}px`}
      disabled={disabled}
      bgColor={variants.theme[variant].bgColor}
      borderColor={variants.theme[variant].borderColor}
      color={variants.theme[variant].color}
      fontFamily="PT Sans, sans-serif"
      fontSize={variants.sizes[size].fontSize}
      lineHeight={variants.sizes[size].lineHeight}
      _hover={{
        bgColor: variants.theme[variant].hover.bgColor,
        color: variants.theme[variant].hover.color,
      }}
      _disabled={{
        cursor: "not-allowed",
        opacity: ".75",
        _hover: {
          bgColor: variants.theme[variant].bgColor,
          color: variants.theme[variant].color,
        },
      }}
      _active={{
        bgColor: variants.theme[variant].hover.bgColor,
        color: variants.theme[variant].hover.color,
      }}
      _focus={{ outline: "none" }}
      css={css}
      {...rest}
      as={link ? "a" : "button"}
      whileHover={withOverAnimation && "hover"}
    >
      {prefix || sufix ? (
        <>
          {prefix && (
            <Text as="span" mr="6px" {...prefixCss} variants={textMotion}>
              {prefix}
            </Text>
          )}
          <Text as="span">{children}</Text>
          {sufix && (
            <MotionText as="span" ml="6px" {...sufixCss} variants={textMotion}>
              {sufix}
            </MotionText>
          )}
        </>
      ) : (
        <>{children}</>
      )}
    </MotionButton>
  );
}
