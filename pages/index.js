import { Box, Grid, Stack } from "@chakra-ui/react";
import { CardInstrument } from "components/CardInstrument";
import { CardInstrumentArray } from "components/CardInstrument/CardInstrumentArray";
import { HeroSection } from "components/HeroSection";
import { NavBar } from "components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MusicalTuning</title>
        <meta name="description" content="O melhor site de afinação" />
      </Head>
      <NavBar />
      <HeroSection />
      <Box bg="#202020" fontFamily="PT Sans" p="80px 0" w="100%">
        <Grid
          w="80%"
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr 1fr",
            "2xl": "1fr 1fr 1fr 1fr",
          }}
          gap="30px"
          mx="auto"
        >
          {CardInstrumentArray.map((item, index) => {
            return (
              <CardInstrument
                key={`CardInstrument-${index}`}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
