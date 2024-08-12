"use client";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../navbar/page";

function Hero() {
  const animateRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.fromTo(
      animateRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "ease-in-out" }
    );
  }, []);

  return (
    <Flex
      filter="auto"
      brightness="95%"
      bgImage={"/images/OUTDOOR_RESTAURANT_1.svg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      mx={{ base: 4, md: 10, lg: 20 }}
      minH={{ base: "580px", md: "400px", lg: "600px" }}
      borderRadius="xl"
      position="relative"
      p={{ base: 2, md: 4 }}
      my={{ base: 5, md: 10 }}
      ref={animateRef} // Add ref here
    >
      <Box flex="1" position="relative" filter="auto" brightness="100%">
        <Navbar />
        <Box
          position="absolute"
          top={{ base: 450, md: 20 }}
          left={0}
          right={0}
          margin="auto"
          textAlign="center" // Center the text horizontally
          bg="blackAlpha.50"
          borderRadius="md"
          m={{ base: 4, md: 8 }}
          p={{ base: 2, md: 4 }}
          ref={animateRef} // Add ref here
        >
          <Text
            fontSize={{ base: "4xl", md: "8xl" }}
            fontFamily="Designer, sans-serif"
            fontWeight="bold"
            color={"white"}
          >
            MEJING TALUN
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Hero;
