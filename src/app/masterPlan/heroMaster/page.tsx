"use client"
import React, { useEffect, useRef } from 'react';
import { Box, Image, ChakraProvider, Text } from '@chakra-ui/react';
import gsap from 'gsap';

const HeroMaster: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Animate the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.inOut" }
    );
  }, []);

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        position="relative"
        p={{ base: 4, md: 8 }} // Padding for responsiveness
      >
        {/* Place the "Master Plan" text outside the image container */}
        <Box
          pos="absolute"
          zIndex={2}
          top={{ base: "20px", md: "500px" }}
          left={{ base: 4, md: 32 }}
          ref={textRef} // Add ref here
        >
          <Text color={{base:"black", md:"white"}} fontSize={{ base: "6xl", md: "8xl" }} fontWeight="bold" fontFamily="Designer, sans-serif"
          >
            Mejing Talun
          </Text>
        </Box>

        <Box
          position="relative"
          width={{ base: "100%", md: "90%" }}
          height={{ base: "400px", md: "600px" }}
          borderRadius={"2em 20px 2.5em 0.2in"}
        >
          <Image
            src="/images/OUTDOOR_RESTAURANT_1.svg"
            alt="Light Mode"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="md"
            zIndex={1}
            ref={imageRef} // Add ref here
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default HeroMaster;
